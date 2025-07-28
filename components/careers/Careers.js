import Header from '@/components/Header.js'
import Footer from '@/components/Footer.js'
import CareerForm from '@/components/careers/CareerForm.js'

export default function Careers() {
  return(
    <div className="font-['Proxima Nova']">
      <Header currentTab="careers" />
      <div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px]">
        <CareerForm />
      </div>
      <Footer />
    </div>
  )
}