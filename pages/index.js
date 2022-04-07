import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'
import { faBars, faAngleLeft, faHome } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BASE_URL = process.env.BASE_URL || '';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio | Ernesto Yoofi</title>
        <meta name="description" content="Hey!!, I'M Newbie Coders From Indonesia 😏"/>
        <link ref="icon" href='./img/profile.jpg' />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.respon_navbar}>

        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.banner}>
          <img src="/img/banner.jpg" width="200%" alt="banner"/>
            <div className={styles.profil}>
              <div className={styles.profil_img}>
                <img src="/img/profile.jpg" alt="profile" width="100%" />
              </div>
              <div className={styles.profil_desc}>
                <b>Ernesto Yoofi</b>
                <p>Student | Front End Developer</p>
              </div>
            </div>
        </div>
        <div className={styles.respon_main}>
          <div className={styles.contentable}>
            <span className={styles.label}>About Me</span>
            <div className={styles.href}>
              Hii, i'm Ernesto Yoofi,  i live in the country <a href="">Indonesia</a>, i junior high school in <a href="https://www.smpn1nanggulan.sch.id/">SMPN 1 Nanggulan</a>, inspiration Coding From <a href="">Lecturer WPU - Sandhika Galih ✨</a>, i have social media <a href="https://www.instagram.com/yoofi.ernesto/">Instagram</a>, <a href="https://www.facebook.com/zeemong.yetta.5">Facebook</a>, <a href="https://www.youtube.com/channel/UCoiy7J9wuubiqdvvJvImmMg">Youtube</a>, and <a href="https://www.tiktok.com/@ernesto.yoofi_1403">Tiktok</a>
            </div>
          </div>
          <div className={styles.contentable}>
            <span className={styles.label}>Projects</span>
            <div className={styles.col_3}>
              <div className={styles.box_card}>
                <img src="/tumb/spesana-main.png" alt="Tumb" width="100%"/>
                <div className={styles.text}>
                  <b>spesana</b>
                  <p>Spesana Nanggulan | Beranda</p>
                </div>
              </div>
              <div className={styles.box_card}>
                <img src="/tumb/qr-code-main.png" alt="Tumb" width="100%"/>
                <div className={styles.text}>
                  <b>spesana</b>
                  <p>Spesana Nanggulan | Beranda</p>
                </div>
              </div>
              <div className={styles.box_card}>
                <img src="/tumb/whatsapp-bot-basic-main.png" alt="Tumb" width="100%"/>
                <div className={styles.text}>
                  <b>spesana</b>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentable}>
            <span className={styles.label}>Gallery</span>
            <div className={styles.col_3}>
              <div className={styles.box_card_igol}>
                <img src="/img/img-1.jpg" width="100%" />
              </div>
              <div className={styles.box_card_igol}>
                <img src="/img/img-2.jpg" width="100%" />
              </div>
              <div className={styles.box_card_igol}>
                <img src="/img/img-3.jpg" width="100%" />
              </div>
            </div>
          </div>
          <div className={styles.contentable}>
            <span className={styles.label}>Contact Me</span>
            <div className={styles.form_contact}>
              <form name="contact_form" method="Post" className={styles.form}>
                <label>
                  <b>Nama *</b>
                  <input type="text" placeholder="Nama *" name="nama" required />
                </label>
                <label>
                  <b>Email *</b>
                  <input type="email" placeholder="Email *" name="email" required />
                </label>
                <label className={styles.input_tip}>
                  <b>Pesan *</b>
                  <textarea type="text" placeholder="Pesan" name="pesan" required />
                </label>
                <button type="submit">submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer_respon}>
          <div className={styles.footer_col}>
            <div className={styles.card_end}>
              <b>Website Resmi</b>
              <ul>
                <li><a href="https://ernestoyoofi.github.io/">ernestoyoofi.github.io</a></li>
                <li><a href="https://ernestoyoofi.w3spaces.com/">ernestoyoofi.w3spaces.com</a></li>
                <li><a href="https://spesana.vercel.app/">spesana.vercel.app</a></li>
                <li><a href="https://ernestoyoofi.web.app/">ernestoyoofi.web.app</a></li>
              </ul>
            </div>
            <div className={styles.card_end}>
              <b>About This Web</b>
              <ul>
                <li><a href="https://nextjs.org/">Build By Nextjs</a></li>
                <li><a href="https://vercel.com/">Vercel</a></li>
                <li><a href="https://spesana.vercel.app/">Repos</a></li>
                <li><a href="https://ernestoyoofi.web.app/">ernestoyoofi.web.app</a></li>
              </ul>
            </div>
            <div className={styles.card_end}>
              <b>Sosial Media</b>
              <ul>
                <li><a href="https://www.tiktok.com/@ernesto.yoofi_1403">Tiktok</a></li>
                <li><a href="https://www.instagram.com/yoofi.ernesto/">Instagram</a></li>
                <li><a href="https://www.youtube.com/channel/UCoiy7J9wuubiqdvvJvImmMg">Youtube</a></li>
                <li><a href="https://www.facebook.com/zeemong.yetta.5">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
