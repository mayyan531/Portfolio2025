import lily from '/assets/lily.png'
import cd from '/assets/kidKrow.png'
import jili from '/assets/jili.png'
import globe from '/assets/globe.png'
import cruelPrince from '/assets/cruelPrince.png'
import berry2 from '/assets/berry2.png'
import berry3 from '/assets/berry3.png'
import berry4 from '/assets/berry3.png'
import dice from '/assets/dice.png'
import smiski from '/assets/smiski.png'
import smiski2 from '/assets/smiski2.png'
import bow from '/assets/bow.png'
import button from '/assets/button.png'
import mouse from '/assets/mouse.png'
import puzzle from '/assets/puzzle.png'
import puzzle2 from '/assets/puzzle2.png'
import berry from '/assets/berry.png'
import tea from '/assets/tea.png'
import blackCat from '/assets/blackCat.png'
import bowl from '/assets/bowl.png'
import cheesecake from '/assets/cheesecake.png'
import jewel from '/assets/jewel.png'
import thread from '/assets/thread.png'
import hat from '/assets/hat.png'
import lilyOfTheValley from '/assets/lilyOfTheValley.png'
import watermelon from '/assets/watermelon.png'
import pen from '/assets/pen.png'
import machineFoot from '/assets/machineFoot.png'
import ace from '/assets/ace.jpg'
import card from '/assets/card.png'
import seal from '/assets/seal.png'

const size = {
  xs: `w-[4vw] min-w-[60px] max-w-[90px]`,
  sm: 'w-[6vw] min-w-[70px] max-w-[140px]',
  md: 'w-[8vw] min-w-[80px] max-w-[200px]',
  lg: 'w-[11vw] min-w-[100px] max-w-[300px]',
  xl: 'w-[14vw] min-w-[150px] max-w-[420px]',
}

const Images = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* FADE 2 */}
      <div className="fade-2">
        <img src={watermelon} className={`hidden md:block md:absolute ${size.md} bottom-[8%] left-[12%] rotate-[70deg] `} alt='watermelon'/>
        <img src={lily} className={`absolute ${size.xl} bottom-[3%] md:bottom-[25%] right-[0%] md:right-[18%]`} alt='lily' />
        <img src={dice} className={`absolute ${size.xs} md:top-[5%] right-[15%] -rotate-90`} alt='dice'/>
        <img src={mouse} className={`hidden md:block md:absolute ${size.md} top-[4%] left-[52%] `} alt='mouse' />
        <img src={cheesecake} className={`hidden md:block md:absolute ${size.xl} bottom-[35%] left-[15%]`} alt='cheesecake' />
        <img src={smiski} className={`absolute ${size.xs} top-[2%] right-[50%] `} alt='smiski' />
        <img src={smiski2} className={`hidden md:block md:absolute ${size.md} bottom-[4%] right-[58%] `} alt='smiski2' />
        <img src={machineFoot} className={`hidden md:block md:absolute ${size.xs} bottom-[4%] left-[4%]`} alt='sewing machine foot'/>
      </div>

      {/* FADE 3 */}
      <div className="fade-3">
        <img src={ace} className={`absolute ${size.xs} left-[39%] md:left-[15%] bottom-[25%] md:bottom-[28%] -rotate-20`} alt="ace card" />
        <img src={blackCat} className={`absolute ${size.lg} md:left-[23%] left-[8%] bottom-[1%]`} alt='black cat'/>
        <img src={globe} className={`hidden md:block md:absolute ${size.xl} bottom-[2%] right-[0%]`} alt='globe'/>
        <img src={lilyOfTheValley} className={`hidden md:block md:absolute ${size.sm} bottom-[45%] left-[8%] `} alt='lily of the valley'/>
        <img src={bowl} className={`hidden md:block md:absolute ${size.xl} top-[2%] left-[17%]`} alt='bowl'/>
        <img src={bow} className={`absolute ${size.md} bottom-[12%] md:bottom-[4%] right-[36%] rotate-20`} alt='bow'/>
        <img src={cd} className={`absolute ${size.lg} top-[20%] md:top-[5%] right-[50%] md:right-[22%] transition-transform duration-5000 hover:rotate-360`} alt='cd'/>
        <img src={seal} className={`hidden md:block md:absolute ${size.sm} top-[45%] right-[2%] rotate-20`} alt='seal'/>
      </div>

      {/* FADE 4 */}
      <div className="fade-4">
        <img src={berry} className={`hidden md:block md:absolute ${size.xs} right-[27%] bottom-[6%]`} alt='blueberry1' />
        <img src={berry4} className={`absolute ${size.xs} right-[35%] top-[10%] -rotate-20`} alt='blueberry2'/>
        <img src={berry2} className={`hidden md:block md:absolute ${size.xs} top-[45%] right-[10%]`} alt='blueberry3'/>
        <img src={button} className={`hidden md:block md:absolute ${size.md} top-[8%] right-[52%] rotate-20`} alt='button'/>
        <img src={berry3} className={`absolute ${size.sm} top-[2%] left-[2%]`} alt='blueberry4'/>
        <img src={puzzle2} className={`absolute ${size.xs} bottom-[1%] right-[45%] rotate-5`} alt='puzzle piece'/>
        <img src={tea} className={`hidden md:block md:absolute ${size.md} left-[43%] bottom-[5%]`} alt='tea cup'/>
        <img src={card} className={`hidden md:block md:absolute ${size.xs} right-[12%] bottom-[30%] rotate-20`} alt='card'/>
      </div>

      {/* FADE 5 */}
      <div className="fade-5">
        <img src={puzzle} className={`hidden md:block md:absolute ${size.sm} top-[2%] left-[35%] -rotate-30`} alt='puzzle'/>
        <img src={jili} className={`hidden md:block md:absolute ${size.lg} bottom-[8%] right-[12%] `} alt='jili cat'/>
        <img src={jewel} className={`absolute ${size.sm} left-[26%] top-[38%] -rotate-90`} alt='jewel'/>
        <img src={hat} className={`absolute ${size.lg} left-[1%] bottom-[20%] md:bottom-[16%] `} alt='hat'/>
        <img src={thread} className={`absolute ${size.lg} left-[4%] top-[10%] rotate-40 `} alt='thread'/>
        <img src={cruelPrince} className={`absolute ${size.xl} top-[15%] right-[6%]`} alt='cruel prince book'/>
        <img src={pen} className={`absolute ${size.md} top-[4%] right-[1%]`} alt='pen'/>
      </div>

    </div>
  )
}

export default Images