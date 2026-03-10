type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetail({ params }: Props) {
    const resolvedParams = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Product ID: {resolvedParams.id}
      </h1>
    </div>
  )
}