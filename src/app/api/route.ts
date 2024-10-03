import { NextResponse } from "next/server";

const messages = [
  "Hello from CoinSwag!",
  "Welcome to our hackathon project!",
  "Blockchain innovation at its finest!",
  "Decentralize all the things!",
  "To the moon! 🚀",
  "Smart contracts are the future!",
  "Web3 revolution in progress...",
  "Tokenize your dreams!",
  "Crypto enthusiasts unite!",
  "Building the future of finance!",
];

export async function GET() {
  return handleRequest();
}

export async function POST() {
  return handleRequest();
}

export async function PUT() {
  return handleRequest();
}

export async function DELETE() {
  return handleRequest();
}

function handleRequest() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return NextResponse.json({ message: randomMessage }, { status: 200 });
}
