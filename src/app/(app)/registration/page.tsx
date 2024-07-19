import ApplicationForm from '@/components/others/application-form'
import SectionTitle from '@/components/others/section-title'

export default function Registration() {
  return (
    <section className="w-full h-auto p-2">
      <SectionTitle title="Students" titleAnimated="Registration" />
      <ApplicationForm />
    </section>
  )
}
