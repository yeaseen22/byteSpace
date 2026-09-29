import { creator, growth } from '../../data/content'
import rowAImage from '../../assets/figma/growth-illustration.jpg'
import rowBImage from '../../assets/figma/creator-illustration.jpg'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import { CourseCard } from './CourseGrid'
import { courses } from '../../data/content'

function ProgressCard() {
  return (
    <div className="absolute bottom-0 left-0 w-[232px] rounded-2xl bg-white p-5 shadow-xl shadow-ink/5">
      <p className="text-sm font-medium leading-6 text-ink">Learning Progress</p>
      <p className="mt-1 font-display text-5xl font-semibold leading-[58px] text-ink">55%</p>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-4">
        <div className="h-full w-[56%] rounded-full bg-blue-600" />
      </div>
    </div>
  )
}

function StudentsCard() {
  const avatars = ['SM', 'JL', 'AB', 'RK', 'DM', 'PS', 'TN', '2K+']
  return (
    <div className="absolute -left-6 top-10 w-[258px] rounded-2xl bg-white p-5 shadow-xl shadow-ink/5">
      <p className="text-base font-medium leading-6 text-ink">Happy Students</p>
      <p className="mt-1 flex items-center gap-1 text-xs leading-[15px] text-muted">
        4.5 (240)
        <Icon name="star" filled className="h-4 w-4 text-lime-500" />
      </p>
      <div className="mt-3 flex -space-x-[18px]">
        {avatars.map((a, i) => (
          <span
            key={a}
            className="grid h-[43px] w-[43px] place-items-center rounded-full text-xs font-bold text-white ring-2 ring-white"
            style={{
              backgroundColor: ['#003BE2', '#D4FB20', '#7F30F7', '#424348', '#C1E338', '#E5E6E8', '#4B4C53'][i % 7],
              color: i === 1 || i === 4 ? '#242528' : '#FFFFFF',
            }}
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  )
}

function RevenueCard({ label, period, amount }) {
  return (
    <div className="w-[232px] rounded-2xl bg-blue-600 p-5">
      <div className="flex items-start justify-between">
        <p className="text-base font-medium leading-[19px] text-surface-4">{label}</p>
        <span className="rounded-full bg-lime-300 px-2.5 py-0.5 text-[10px] font-medium text-ink">+12%</span>
      </div>
      <p className="mt-1 text-[10px] leading-3 text-surface-4">{period}</p>
      <p className="mt-1 font-display text-2xl font-semibold leading-8 text-surface-4">{amount}</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/20">
        <div className="h-full w-[56%] rounded-full bg-lime-400" />
      </div>
    </div>
  )
}

export default function WhyByteSpace() {
  return (
    <section id="creators" className="scroll-mt-24 overflow-hidden bg-surface-2 py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.08fr]">
          <div>
            <h2 className="max-w-[577px] font-display text-h2 font-semibold text-ink">{growth.heading}</h2>
            <p className="mt-6 max-w-[477px] text-lg leading-[1.6] text-body">{growth.body}</p>

            <dl className="mt-8 flex gap-10">
              {growth.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-h3 font-medium leading-[44px] text-blue-600">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-lg leading-[29px] text-body">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={rowAImage}
              alt="A learner working through a ByteSpace course"
              width={577}
              height={540}
              className="w-full max-w-[520px] select-none lg:ml-auto"
              draggable="false"
            />
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute right-0 top-6 w-[373px] max-w-[48%]">
                <CourseCard title={courses[0].title} priceTone="plum" />
              </div>
              <ProgressCard />
            </div>
          </div>
        </div>

        <div className="mt-24 grid items-center gap-14 lg:mt-32 lg:grid-cols-[1.08fr_1fr]">
          <div className="relative order-2 lg:order-1">
            <img
              src={rowBImage}
              alt="Creator revenue dashboard"
              width={435}
              height={596}
              className="w-full max-w-[435px] select-none"
              draggable="false"
            />
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-0 top-0 flex flex-col gap-4">
                <RevenueCard label="Total Revenue" period="July 1-28" amount="$120.29" />
                <div className="flex gap-4">
                  <RevenueCard label="Year to Date" period="2023" amount="$1,200.38" />
                </div>
              </div>
              <StudentsCard />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="max-w-[391px] font-display text-h2 font-semibold text-ink">{creator.heading}</h2>
            <p className="mt-6 max-w-[580px] text-lg leading-[1.6] text-body">{creator.body}</p>

            <ul className="mt-8 space-y-3">
              {creator.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-lg font-medium leading-[22px] text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-400 text-ink">
                    <Icon name="check" className="h-4 w-4" strokeWidth="2.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
