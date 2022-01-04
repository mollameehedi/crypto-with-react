import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import myVideo from "./videofilenamee.mp4";
import group1 from "./images/group1.png";
import group2 from "./images/group2.png";
import group3 from "./images/group3.png";
import group11 from "./images/group11.png";
import group21 from "./images/group21.png";
import group22 from "./images/group22.png";
import group23 from "./images/group23.png";
import group24 from "./images/group24.png";
import group25 from "./images/group25.png";
import group26 from "./images/group26.png";
import group27 from "./images/group27.png";
import group28 from "./images/group28.png";
import group29 from "./images/group29.png";
import group30 from "./images/group30.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import './App.css';

const App = () => (
      <div className="App">
      <div>
        <div id="logo" className="bannerImg">
          <div className='main'>
            <h1 className='heading'>H~PEBEAST</h1>
            <p className='text'>8K NEXT-GENERATION, HIGH FASHION HAPES</p>
            <p className='text1'>Unique, fully 3D and built to unite the ape multiverse.</p>
            <p className='text2'>Designed and styled by Digimental.</p>
          </div>
        </div>
        <Welcome />
        <div className='main2'>
          <h1 className='heading1'>In the beginning was the word, and the word was -</h1>
          <p className='text4'>A starlit ceremony, two million years ago. Lightning strikes the monolith and the universe fractures. Apes spin off in 10k tribes, distinct but familiar. Every ape is unique. Every ape is beautiful. Every ape is loved, and every ape is family, whatever their differences, wherever they are now.</p>
          <p className='text4'>Meanwhile, at the heart of the shattered multiverse, the PRIMAL HAPES wait for the whole family to return. They wait and they build out their style, they work the Hapewalk, and they plan for a bigger future.</p>
        </div>
        <div className='video-wrapper'>
          <video controls autoPlay loop muted controls width="100%">
            <source src={myVideo} type="video/mp4"></source>
          </video>
        </div>
        <div className='main2'>
          <p className='text4'><b>HAPEBEAST</b> is a new art and fashion playground from London-based studio Digimental. Built around an initial drop of 8,192 unique NFTs on the Ethereum blockchain, the project unites style, technology and community, and sets up HAPES as next-generation fashion leaders.</p>

          <p className='text4'>You can find out more about the HAPEBEAST team below and see the lightest hints for our post-release plans. As we move closer to launch this site will evolve; like apes at the dawn of a new world we’re making something from nothing, noise from silence. In the beginning was the word. The word was, and is, HAPE.</p>
        </div>
        <div id="logo" className="bannerImgs"></div>
        <div className='content1'>
          <h1 className='text22'>ROADMAP TEASER</h1>
          <div className='group'>
            <div className='group1'>
              <img src={group1} />
              <p className='group1Heading'>PHASE 1: <br /> IN THE BEGINNING</p>
              <p className='group1Content'>A new dimension <br /> First drop <br /> Music to HAPE to</p>
            </div>
            <div className='group1'>
              <img src={group2} />
              <p className='group1Heading'>PHASE 2: <br /> THE HAPE MACHINE</p>
              <p className='group1Content'>Second drops<br /> Special collections<br /> Simian engineering</p>
            </div>
            <div className='group1'>
              <img src={group3} />
              <p className='group1Heading'>PHASE 3: <br /> THE HAPEWALK</p>
              <p className='group1Content'>Clothing collabs <br /> HAPE Couture <br /> The runway to fame</p>
            </div>
          </div>
        </div>
        <div className='content5'>
          <h1 className='heading5'>PROTECT YOURSELF AND THE COMMUNITY FROM SCAMMERS. REPORT FAKE COLLECTIONS.</h1>
          <h1 className='heading6'>RELEASE DATE:</h1>
          <h1 className='heading7'>JANUARY 2022</h1>
        </div>
        <div id="logo" className="bannerImg1"></div>
        <div className='main6'>
          <h1 className='heading3'>MEET THE H~PEBEAST TEAM</h1>
          <div>
            <img src={group11} className="img1" />
            <h1 className='heading8'>DIGIMENTAL</h1>
            <h1 className='heading9'>PRIMAL HAPE</h1>
            <h1 className='content3'>Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist on the project. Proud member of BAYC.</h1>
          </div>
        </div>
        <div className="bannerImg9">
          <img className="icon" src={icon1} />
          <img className="icon1" src={icon2} />
        </div>
        <div className='main4'>
          <div className='group1'>
            <img src={group21} />
            <p className='group1Heading'>TROU</p>
            <p className='group22Heading'>UTILITY</p>
            <p className='group22Content'>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
            <div className="bannerImg8">
              <img src={icon1} />
            </div>
          </div>
          <div className='group1'>
            <img src={group22} />
            <p className='group1Heading'>RICK</p>
            <p className='group22Heading'>SMART CONTRACTS</p>
            <p className='group22Content'>Leading Digimental’s interface with the blockchain and securing the future of the HAPES. Tech’s back in fashion.</p>
            <div className="bannerImg8">
              <img src={icon1} />
            </div>
          </div>
          <div className='group1'>
            <img src={group23} />
            <p className='group1Heading'>JUSTCARL</p>
            <p className='group22Heading'>STRATEGY</p>
            <p className='group22Content'>Noise & positioning. Want to talk to the HAPEBEAST team about a commercial arrangement? Carl’s your point of contact.</p>
            <div className="bannerImg8">
              <img src={icon1} />
            </div>
          </div>
          <div className='group1'>
            <img src={group24} />
            <p className='group1Heading'>MR.KRIME</p>
            <p className='group22Heading'>MUSIC</p>
            <p className='group22Content'>Everything in our world moves to a beat. The ape multiverse is no different and Krime has every one of those beats covered.</p>
            <div className="bannerImg8">
              <img src={icon1} />
            </div>
          </div>
          <div className='group1'>
            <img src={group25} />
            <p className='group1Heading'>STALONE</p>
            <p className='group22Heading'>MOD</p>
            <p className='group22Content'>Fifty percent of the power behind the mod team: crafting Discords, taking names. Good communities need the best leadership.</p>
            <div className="bannerImg8">
              <img src={icon1} />
            </div>
          </div>
          <div className='group1'>
            <img src={group26} />
            <p className='group1Heading'>CYTRUS</p>
            <p className='group22Heading'>MOD</p>
            <p className='group22Content'>The other half of our moderation enforcement squad. Fighting bots and taking the battle back to the scammers.</p>
            <div className="bannerImg8">
              <img src={icon1} />
            </div>
          </div>
        </div>
        <div className='main8'>
          <img src={group27} className="img1" />
          <h1 className='heading13'>THE MODERATION</h1>
          <h1 className='heading12'>TEAM</h1>
        </div>
        <div className='main5'>
          <div className='heading21'>
            <h1 className='heading22'>NG</h1>
            <p className='content11'>HEAD MOD &</p>
            <p className='content12'>CHINESE MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>RIDOO</h1>
            <p className='content11'>INDONESIAN</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>JIMMY11</h1>
            <p className='content11'>PHILIPPINES</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>HOTMESSMELLOW</h1>
            <p className='content11'>INDIAN</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>THEGOAT</h1>
            <p className='content11'>NEW ZEALAND</p>
            <p className='content12'> MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>YIN</h1>
            <p className='content11'>CHINESE</p>
            <p className='content12'>MODERATOR</p>
          </div>
        </div>
        <div className='main1-2'>
          <div className='heading21'>
            <h1 className='heading22'>MARTBIEMANS</h1>
            <p className='content11'>VC</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>MIKEY G</h1>
            <p className='content11'>US</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>KUROMI</h1>
            <p className='content11'>CHINESE</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>DONA</h1>
            <p className='content11'>SPANISH</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>NITO03</h1>
            <p className='content11'>FRENCH</p>
            <p className='content12'> MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>FLOOB</h1>
            <p className='content11'>JAPANESE</p>
            <p className='content12'>MODERATOR</p>
          </div>
        </div>
        <div className='main1-2'>
          <div className='heading21'>
            <h1 className='heading22'>CRISTIAN</h1>
            <p className='content11'>US</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>SOLID</h1>
            <p className='content11'>RUSSIAN</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>ITSMEFEYZAA</h1>
            <p className='content11'>TURKISH</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>HEAL GENERAL</h1>
            <p className='content11'>WELLNESS</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>TIA</h1>
            <p className='content11'>KOREAN</p>
            <p className='content12'> MODERATOR</p>
          </div>
          <div className='heading21'>
            <h1 className='heading22'>MITO</h1>
            <p className='content11'>ARABIC</p>
            <p className='content12'>MODERATOR</p>
          </div>
        </div>
        <div className='main7'>
          <div className='heading23'>
            <h1 className='heading22'>CRISTIAN</h1>
            <p className='content11'>US</p>
            <p className='content12'>MODERATOR</p>
          </div>
          <div className='heading23'>
            <h1 className='heading22'>SOLID</h1>
            <p className='content11'>RUSSIAN</p>
            <p className='content12'>MODERATOR</p>
          </div>
        </div>
        <div className='main9'>
          <div className='main10'>
            <div>
              <h1 className='heading24'>CURIOUS?</h1>
              <h1 className='heading24'>GET IN TOUCH</h1>
              <h1 className='heading25'>We can't promise a reply but we'd love to hear your thoughts.</h1>
            </div>
          </div>
          <div className='main11'>
            <div>
              <p>FOLLOW US</p>
              <div className='main12'>
                <img src={group28} className='img12' />
                <img src={group29} className='img12' />
                <img src={group30} />
              </div>
            </div>
            <div className='main13'>
              <p>CONTACT US</p>
              <p className='conntent22'>contact@hapebeast.com</p>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className='main15'>
          <div className='main16'>
            <p className='conntent23'>© 2021 HAPEBEAST. Apedemption Genesis. Apes forever.</p>
          </div>
        </div>
      </div>
    </div>
);

export default App;
