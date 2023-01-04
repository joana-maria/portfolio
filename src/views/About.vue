<template>
  <div class="about-txt" v-if="breakpoints.desktop.matches">
    <img src="src/assets/me.png" alt="Joana Oliveira Designer" id="me" />
    <p>
      Hello!<br /><br />
      I’m <span id="about-bold"> Joana Maria</span>, I was born in Braga,
      Portugal. Within the last couple of years, I’ve worked in projects ranging
      from graphic to web develepoment, and evenui/ux to creative coding.
      <br /><br />Besides being a designer, I also know how to implement my
      design ideas with my front-end coding skills and I also love to experiment
      with more interactive and creative coding approaches.
    </p>
  </div>

  <div id="contacts" class="bold-txt" v-if="breakpoints.desktop.matches">
    <a
      class="link"
      href="https://www.instagram.com/umajoanamaria/"
      target="_blank"
      >/INSTAGRAM</a
    >
    <a
      class="link"
      href="https://www.behance.net/joanamariaoliveira"
      target="_blank"
      >/BEHANCE</a
    >
    <a
      class="link"
      href="https://www.linkedin.com/in/joana-maria-oliveira/"
      target="_blank"
      >/LINKEDIN</a
    >

    <span>
      <br />
      /EMAIL <br />
      umajoanamaria@gmail.com</span
    >
  </div>
  <div id="cur" v-if="breakpoints.desktop.matches">
    <div id="edu-cur">
      <span class="sub-txt">EDUCATION</span>
      <div class="year-wrap">
        <span class="year">'22</span>
        <div class="details-wrap">
          <span class="cur-1">Masters in Design and Multimedia</span>
          <span class="cur-2"
            >Faculty of Sciences and Technology - University of Coimbra</span
          >
          <span><br /></span>
          <span class="cur-1">Bachelors in Design and Multimedia</span>
          <span class="cur-2"
            >Faculty of Sciences and Technology - University of Coimbra</span
          >
        </div>
      </div>
    </div>
    <div style="margin-top: 35px">
      <span class="sub-txt">RELEVANT EXPERIENCE</span>
      <div class="year-wrap">
        <span class="year">'22</span>
        <div class="details-wrap">
          <span class="cur-1">Student Researcher</span>
          <span class="cur-2"
            >Centre for Informatics and Systems of the University of
            Coimbra</span
          >
          <span class="cur-3">6 months</span>
        </div>
      </div>
      <div class="year-wrap">
        <span class="year">'19</span>
        <div class="details-wrap">
          <span class="cur-1">SubVisual Summer Camp</span>
          <span class="cur-2"
            >Intern at siosLIFE — venture of Subvisual, Braga</span
          >
          <span class="cur-3">3 months</span>
          <span><br /></span>
          <span class="cur-1">Associative Leader</span>
          <span class="cur-2"
            >Image Department Coordenator for Associação Académica de Coimbra
            <br />
            and Image Coordinator of Festa das Latas</span
          >
          <span class="cur-3">11 months</span>
        </div>
      </div>
    </div>
    <div style="margin-top: 35px; display: flex; flex-direction: row">
      <div style="margin-right: 105px">
        <span class="sub-txt">DESIGN</span>
        <div style="margin-top: 15px" class="cur-1">
          Web development<br />
          UI/UX<br />
          Graphic Design<br />
          Editorial/Print<br />
          Creative Coding
        </div>
      </div>
      <div>
        <span class="sub-txt">TECHNICAL</span>
        <div style="margin-top: 15px" class="cur-1">
          JavaScript/NodeJS<br />
          HTML/CSS<br />
          XML/JSON<br />
          Figma<br />
          Adobe Creative Cloud
        </div>
      </div>
    </div>
  </div>
  <div id="cur-link" v-if="breakpoints.desktop.matches">
    <p class="link bold-txt">/DOWNLOAD CURRICULUM</p>
  </div>

  <!-- Mobile -->
  <div class="about-txt-mbl" v-if="breakpoints.mobile.matches">
    <div id="me-det">
      <img src="src/assets/me.png" alt="Joana Oliveira Designer" id="me-mbl" />
      <div
        id="contacts-mbl"
        class="bold-txt-mbl"
        v-if="breakpoints.mobile.matches"
      >
        <a
          class="link"
          href="https://www.instagram.com/umajoanamaria/"
          target="_blank"
          >/INSTAGRAM</a
        >
        <a
          class="link"
          href="https://www.behance.net/joanamariaoliveira"
          target="_blank"
          >/BEHANCE</a
        >
        <a
          class="link"
          href="https://www.linkedin.com/in/joana-maria-oliveira/"
          target="_blank"
          >/LINKEDIN</a
        >

        <span>
          <br />
          /EMAIL <br />
          umajoanamaria@gmail.com</span
        >
      </div>
    </div>

    <p>
      Hello!<br /><br />
      I’m <span id="about-bold"> Joana Maria</span>, I was born in Braga,
      Portugal. Within the last couple of years, I’ve worked in projects ranging
      from graphic to web develepoment, and evenui/ux to creative coding.
      <br /><br />Besides being a designer, I also know how to implement my
      design ideas with my front-end coding skills and I also love to experiment
      with more interactive and creative coding approaches.
    </p>
  </div>

  <div id="cur-link-mbl" v-if="breakpoints.mobile.matches">
    <p class="link bold-txt-mbl">/DOWNLOAD CURRICULUM</p>
  </div>
</template>

<script>
import useBreakpoints from "vue-next-breakpoints";

export default {
  setup() {
    document.body.className = "about";

    // Define your breakpoints with any name
    const breakpoints = useBreakpoints({
      mobile: 800, // max-width: 600px
      desktop: [801], // min-width: 601px
    });

    return { breakpoints };
  },
  created() {
    // Event listeners are optional but may come in handy.
    // You can register them inside setup, created or mounted methods.
    this.breakpoints.mobile.on("enter", (mq) => {
      console.log("Entered mobile breakpoint");
      console.log("Media Query", mq);
    });

    this.breakpoints.mobile.on("leave", (mq) => {
      console.log("Left mobile breakpoint");
      console.log("Media Query", mq);
    });
  },
};
</script>

<style scoped>
.year-wrap {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 15px;
}
.details-wrap {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  cursor: pointer;
}

.year {
  font-family: "rotablack_italic";
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.04em;
}

.about-txt {
  grid-area: 1/2 / span 2 / span 1;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 13vh;
}

#me {
  width: 70%;
  margin-bottom: 35px;
}
#about-bold {
  grid-area: 1/2 / span 1 / span 1;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
}

#contacts {
  grid-area: 2/1 / span 1 / span 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.link:hover {
  text-decoration: underline;
  cursor: pointer;
}

#cur-link {
  grid-area: 1/4 / span 1 / span 2;
  display: flex;
  justify-content: center;
}

#cur {
  grid-area: 1/4 / span 2 / span 2;
  display: flex;
  flex-direction: column;
  margin-top: 13vh;
}

.cur-1 {
  font-family: "rotamedium";
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.04em;
}

.cur-2 {
  font-family: "rotamedium";
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin-top: 5px;
}

.cur-3 {
  font-family: "rotamedium";
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  margin-top: 5px;
}

.sub-txt {
  font-family: "rotabold";
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
}

.about-txt-mbl {
  grid-area: 1/1 / span 4 / span 2;
  font-family: "Cardo", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 19%;
  padding: 20px;
}

.bold-txt-mbl {
  grid-area: 1/2 / span 1 / span 1;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
}

#me-mbl {
  width: 47%;
}

#me-det {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 35px;
  justify-content: space-between;
}

#contacts-mbl {
  grid-area: 2/2 / span 1 / span 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.bold-txt-mbl {
  font-family: "rotabold";
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.1em;
}

#cur-link-mbl {
  grid-area: 6/1 / span 1 / span 2;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}
</style>
