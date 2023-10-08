import {Logo} from '@/components/logo'
import {Button} from '@/components/ui/button'
import {Row} from '@/components/ui/row'
import Link from 'next/link'
import {VSpace} from '@/components/ui/v-space'

export default function Login() {
  return (
    <div
      className={'grid place-items-center h-screen bg-center bg-no-repeat bg-cover'}
      style={{backgroundImage: 'linear-gradient(0deg, rgba(97, 0, 194, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),url(./images/login-bg.png), conic-gradient(from 13deg at 28.99% 107.28%, rgb(97, 0, 194).51443457603455deg, #191817 342.4887156486511deg)'}}>
     <div className={'flex flex-col gap-10'}>
       <VSpace>
         <Logo justify={'center'} />

         <p className={'text-center'}>
           Enjoy the newest movies
         </p>
       </VSpace>

       <VSpace className={'justify-center'}>
         <Button btnText={'Login'} className={'w-56'} />
         <Row justify={'center'} className={'gap-2'}>
           <p>No account?</p>
           <Link href={'/'} className={'font-medium underline'}>Sign up</Link>
         </Row>
       </VSpace>
     </div>
    </div>
  )
}
