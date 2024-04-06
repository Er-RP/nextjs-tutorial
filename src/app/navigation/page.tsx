import Link from 'next/link'

const NavigationTest = () => {
  return (
  <div className="flex gap-4">
    <Link href="/" prefetch={false} className='bg-text-main text-main p-1'>Home without prefetch</Link>
  </div>

  )
}

export default NavigationTest