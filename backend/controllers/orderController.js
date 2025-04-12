import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"

const placeOrder = async (req, res) => {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const frontend_url = "http://localhost:5174";

    try {
        const newOrder = new orderModel({
            userId:req.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.userId, {cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"eur",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*0.9
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"eur",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*0.9
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({success:true, session_url:session.url})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

const verifyOrder = async (req, res) => {

}

export {placeOrder, verifyOrder}