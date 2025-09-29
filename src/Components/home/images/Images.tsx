import lily from '../../../Assets/lily.png'
import cd from '../../../Assets/kidKrow.png'
import jili from '../../../Assets/jili.png'
import globe from '../../../Assets/globe.jpg'
import cruelPrince from '../../../Assets/cruelPrince.png'
import berry2 from '../../../Assets/berry2.png'
import berry3 from '../../../Assets/berry3.png'
import berry4 from '../../../Assets/berry3.png'
import dice from '../../../Assets/dice.jpg'
import smiski from '../../../Assets/smiski.jpg'
import smiski2 from '../../../Assets/smiski2.jpg'
import bow from '../../../Assets/bow.png'
import button from '../../../Assets/button.png'
import mouse from '../../../Assets/mouse.png'
import puzzle from '../../../Assets/puzzle.png'
import puzzle2 from '../../../Assets/puzzle2.png'
import berry from '../../../Assets/berry.png'
import tea from '../../../Assets/tea.png'
import blackCat from '../../../Assets/blackCat.png'
import bowl from '../../../Assets/bowl.png'
import cheesecake from '../../../Assets/cheesecake.png'
import jewel from '../../../Assets/jewel.png'
import thread from '../../../Assets/thread.png'
import hat from '../../../Assets/hat.png'
import lilyOfTheValley from '../../../Assets/lilyOfTheValley.jpg'
import watermelon from '../../../Assets/watermelon.jpg'
import pen from '../../../Assets/pen.jpg'
import machineFoot from '../../../Assets/machineFoot.jpg'
import ace from '../../../Assets/ace.jpg'
import card from '../../../Assets/card.png'

type Props = {}

const Images = (props: Props) => {
  return (
    <div className='absolute top-0 h-full w-full pointer-events-none'>
      <div className='fade-2'>
        <img src={watermelon} className='absolute w-[140px] h-auto bottom-[30px] left-[200px] rotate-70' />
        <img src={lily} className='absolute w-[220px] h-auto bottom-[200px] right-[280px]' />
        <img src={dice} className='absolute w-[60px] h-auto top-[40px] right-[150px] -rotate-90' />
        <img src={mouse} className='absolute w-[150px] h-auto top-[20px] left-[710px]' />
        <img src={cheesecake} className='absolute w-[240px] h-auto left-[210px] bottom-[290px]' />
        <img src={smiski} className='absolute w-[80px] h-auto top-[10px] right-[600px]' />
        <img src={smiski2} className='absolute w-[140px] h-auto bottom-[10px] right-[770px] ' />
        <img src={machineFoot} className='absolute w-[70px] h-auto bottom-[20px] left-[90px]' />
      </div>

      <div className='fade-3'>
        <img src={ace} className='absolute w-[70px] h-auto left-[190px] bottom-[250px] -rotate-20' />
        <img src={blackCat} className='absolute w-[170px] h-auto left-[360px] bottom-[50px]' />
        <img src={globe} className='absolute w-[250px] h-auto bottom-[15px] right-[30px]' />
        <img src={lilyOfTheValley} className='absolute w-[90px] h-auto bottom-[320px] left-[90px]' />
        <img src={bowl} className='absolute w-[240px] h-auto left-[250px] top-[0px]' />
        <img src={bow} className='absolute w-[130px] h-auto bottom-[25px] right-[460px] rotate-20' />
        <img src={cd} className='absolute w-[190px] h-auto top-[20px] right-[280px]' />
      </div>

      <div className='fade-4'>
        <img src={berry} className='absolute w-[50px] h-auto left-[780px] bottom-[75px]' />
        <img src={berry4} className='absolute w-[80px] h-auto right-[480px] top-[20px] -rotate-20' />
        <img src={berry2} className='absolute w-[50px] h-auto top-[390px] right-[60px]' />
        <img src={button} className='absolute w-[135px] h-auto top-[20px] right-[700px] rotate-20' />
        <img src={berry3} className='absolute w-[80px] h-auto top-[20px] left-[50px]' />
        <img src={puzzle2} className='absolute w-[60px] h-auto bottom-[60px] right-[650px] rotate-5' />
        <img src={tea} className='absolute w-[140px] h-auto left-[590px] bottom-[10px]' />  
        <img src={card} className='absolute w-[40px] h-auto right-[180px] bottom-[320px] rotate-20' />  
      </div>

      <div className='fade-5'>
        <img src={puzzle} className='absolute w-[90px] h-auto top-[25px] left-[580px] -rotate-30' /> 
        <img src={jili} className='absolute w-[210px] h-auto bottom-[20px] right-[230px]' />
        <img src={jewel} className='absolute w-[80px] h-auto left-[430px] top-[280px] -rotate-90' />
        <img src={hat} className='absolute w-[150px] h-auto left-[30px] bottom-[120px]' />
        <img src={thread} className='absolute w-[180px] h-auto left-[60px] top-[60px] rotate-20' />   
        <img src={cruelPrince} className='absolute w-[250px] h-auto top-[130px] right-[070px]' />
        <img src={pen} className='absolute w-[120px] h-auto top-[70px] right-[10px]' />   
      </div>
    </div>
  )
}

export default Images