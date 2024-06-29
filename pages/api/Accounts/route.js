import connectMongoDB from "@/lib/mongodb";
import Account from "@/models/account";
import { NextResponse } from "next/server";

console.log("Found Page")

export async function POST(request) {
    const {accountAddress, accountName, assets} = await request.json();
    await connectMongoDB();
    await Account.create({accountAddress,accountName,assets});
    return NextResponse.json({message: "Account created"})
} 

export async function GET(request) {
    await connectMongoDB();
    const condition = request.nextUrl.searchParams.get('condition');
    const accounts = await Account.find(condition);
    return NextResponse.json({accounts});
}

export async function DELETE(request) {
    await connectMongoDB();
    const condition = request.nextUrl.searchParams.get('condition');
    await connectMongoDB();
    await Account.findByIdAndDelete(condition);
    return NextResponse.json({message: "Account Deleted"})
}