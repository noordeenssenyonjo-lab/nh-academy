export default async function handler(req: any, res: any){
  if (req.method !== 'POST') return res.status(405).end()
  res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Max-Age=0`)
  return res.json({ ok: true })
}
