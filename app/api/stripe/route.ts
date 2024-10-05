import prisma from "@/app/lib/db";
import redis from "@/app/lib/redis";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";

export async function POST(request: Request) {
  let body =await request.text();
 
  const signature = headers().get("Stripe-Signature");
  let event;
  try {
    event = event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_END_SECRET
    );
  } catch (error) {
    console.log(error);
    return Response.json({msg:"unknown Error"}, { status: 400 });
  }


  switch (event.type) {
    case "checkout.session.completed":
      const session = event?.data?.object;
      await prisma.order.create({
        data: {
          amount: session.amount_total,
          status: session.status,
          userId: session.metadata.userId,
        },
      });
      redis.del(`cart-${session.metadata.userId}`);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return Response.json(null, { status: 200 });
}
