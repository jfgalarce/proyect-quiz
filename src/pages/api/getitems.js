import { GetItems } from "../../lib/db";

export async function GET() {
  try {
    const [resut, fields] = await GetItems();
    const res = await resut[0];
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}