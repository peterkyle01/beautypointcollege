import { Separator } from '../ui/separator'

export default function SectionTitle({
  title,
  titleAnimated,
}: {
  title: string
  titleAnimated: string
}) {
  return (
    <section className="w-full h-20 grid place-items-center place-content-center my-10 md:my-16">
      <h1 className="text-2xl md:text-4xl w-full h-full tracking-tighter text-neutral-700">
        {title}&nbsp;
        <span className="text-sky-500 font-bold">{titleAnimated}</span>
      </h1>
      <div className="w-40 h-4 relative my-2">
        <Separator className=" w-3/4 h-1 absolute top-0 rounded-full bg-primary" />
        <Separator className=" w-3/4 h-1 absolute bottom-0 right-0 rounded-full bg-primary" />
      </div>
    </section>
  )
}
