import companies from "./companies.json";
import { NextResponse } from "next/server";

export async function GET(req) {
	return NextResponse.json(companies);
}
