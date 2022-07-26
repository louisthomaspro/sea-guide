import { NextResponse, NextRequest } from "next/server";
import { serverUrl } from "./config";
const middleware = (req: NextRequest, res: NextResponse) => {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect(`${serverUrl}/search`);
  }
  return NextResponse.next();
};

export default middleware;
