import { GetQuestions } from "../../lib/db";

export async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const data = await url.searchParams.get("data");
    const [resut, fields] = await GetQuestions(data);
    const res = await resut[0];
    return new Response(
      JSON.stringify({
        res,
      },{
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
