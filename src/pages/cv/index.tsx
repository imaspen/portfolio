import { FileDownload } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const theme = useTheme();
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <title>I&rsquo;m Aspen - CV</title>
      </Head>
      <Typography
        component="h1"
        variant={isMediumWidth ? "h2" : "h3"}
        align="center"
        gutterBottom
      >
        Curriculum Vitae
      </Typography>
      <Button
        variant="contained"
        href="/Curriculum_Vitae.pdf"
        target="_blank"
        referrerPolicy="no-referrer"
        startIcon={<FileDownload />}
        sx={{ marginBottom: 4 }}
      >
        Download PDF
      </Button>
      <Box maxWidth="md">
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          Software engineer on course for a 1st class degree with specific
          interests in games programming with Unreal Engine and full stack web
          development, particularly using JavaScript, Node.js and React.
        </Typography>
        <Typography paragraph>
          I started programming 10 years ago with Visual Basic, before quickly
          moving on to Java and web programming. Since then, I have focused most
          of my efforts on the web and and games programming. I have also taken
          part in game jams, usually utilizing Unity LibGDX, obtaining first
          place at the Huddersfield Santander &amp; Enterprise Game Jam and the
          Computer Science with Games Programming Student of the Year award.
        </Typography>
        <Typography paragraph>
          I have gained great experience on my placement year with Beaconsoft,
          as well as my previous experience in industry with SNT, whilst my
          final year at the University of Huddersfield has seen me take on new
          challenges, including expanding my game engine from second year to
          include OpenCV support, creating a LIDAR 3D modelling tool that
          utilizes the iPhone for my dissertation, and creating of a game
          vertical slice for group project.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Previous Work
        </Typography>
        <Typography component="h3" variant="h6">
          Web Developer, Beaconsoft Ltd, July 2020 - Present
        </Typography>
        <Typography paragraph>
          Originally started as a University placement, my contract was extended
          after the duration of the initial placement to allow me to continue to
          work with the Beacon team part time through my final year.
        </Typography>
        <Typography paragraph>
          Worked throughout the stack, taking on responsibilities ranging from
          AWS configuration, MySQL database design and deployment, API
          development using PHP, and frontend development in React. I have been
          able to take part in a number of exciting projects and lead the
          development of Overlord, our in house admin console. Helped develop
          our app as part of a team of an agile team of just five into an award
          winning service.
        </Typography>
        <Typography component="h3" variant="h6">
          Part Time Poker Dealer, Grosvenor Casino, October 2018 - July 2021
        </Typography>
        <Typography paragraph>
          Work as part of a close-knit team in a customer facing role requiring
          quick thinking and long periods of focus. Be responsible for the money
          on the poker tables during the game and ensure players keep within the
          rules.
        </Typography>
        <Typography component="h3" variant="h6">
          Apprentice Full Stack Web Developer, SNT Group, October 2015 - April
          2016
        </Typography>
        <Typography paragraph>
          Responsibilities included liaising with managers and clients to ensure
          designs and implementation were within specification. Working to tight
          time schedules to meet deadlines. Configuring Ubuntu servers for
          projects, usually using a LAMP stack but also using Node.js.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Education
        </Typography>
        <Typography component="h3" variant="h6">
          University of Huddersfield, 2018-Present
        </Typography>
        <Typography>
          Studying Computer Science with Games Programming, BSc (Hons)
        </Typography>
        <Typography marginBottom={2}>
          Course Best Student Award Winner 2018/19
        </Typography>
        <Typography component="h3" variant="h6">
          The Open University, 2017-2018
        </Typography>
        <Typography>Computing and IT, CertHE</Typography>
        <Typography marginBottom={2}>91% Overall</Typography>
        <Typography component="h3" variant="h6">
          Heckmondwike Grammar School, 2009-2014
        </Typography>
        <Typography>13 GCSEs at A* to C</Typography>
        <Typography>
          Including A* Mathematics, A ICT, A English Language
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Technical Skills
        </Typography>
        <Typography component="h3" variant="h6">
          Main Languages
        </Typography>
        <Typography marginBottom={2}>
          JavaScript, TypeScript, C++, C, C\#, Swift, Java, Python, PHP, HTML5,
          CSS3, SQL
        </Typography>
        <Typography component="h3" variant="h6">
          Frameworks
        </Typography>
        <Typography marginBottom={2}>
          Unreal Engine, Unity, SwiftUI, React, Next.JS, Redux, JUnit, MySQL,
          GraphQL
        </Typography>
        <Typography component="h3" variant="h6">
          Tools
        </Typography>
        <Typography marginBottom={2}>
          Git, Windows, MacOS, Ubuntu, CentOS, AWS, WSL, Bash/Zsh, Vim, LaTeX
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Activities
        </Typography>
        <Typography component="h3" variant="h6">
          Community Involvement
        </Typography>
        <Typography paragraph>
          Campaign for positive change on campus to help increase the quality of
          life and teaching on campus for disabled and LGBT+ students. Attend
          meetings between student union staff, university staff, and students
          to help provide a student perspective on necessary changes to create
          an inclusive campus.
        </Typography>
        <Typography paragraph>
          As part of the LGBT+ Student Network in 2019, I was selected to attend
          the NUS LGBT+ Conference, where we debated and voted on policy changes
          and set the agenda of the NUS on LGBT+ issues for the year to come.
        </Typography>

        <Typography component="h3" variant="h6">
          LGBTQ+ Committee, Social Media Secretary (18/19), Trans and Non-binary
          Welfare Officer (19/20)
        </Typography>
        <Typography paragraph>
          Ran the community social media, worked with the rest of the committee
          to ensure that updates were provided regularly.
        </Typography>
        <Typography paragraph>
          Be a point of contact for students struggling with issues around the
          university caused by identifying as trans or non-binary. Liaise with
          the university and external organizations for additional support and
          facilitation of student needs.
        </Typography>
        <Typography paragraph>
          Lead on campus support groups for trans and non-binary students, and
          facilitate the wider LGBTQ+ society activities in collaboration with
          the president and the male and female welfare officers.
        </Typography>

        <Typography component="h3" variant="h6">
          Hudd Drama Vice President
        </Typography>
        <Typography paragraph>
          Facilitate the running of the society for the president by organising
          events, liaising with other committee members to get progress updates
          on projects, and with the student body for information on the wishes
          of our members.
        </Typography>
        <Typography paragraph>
          Furthermore, run some sessions and activities, leading groups of
          between five and twenty students in one off exercises as well as
          longer projects.
        </Typography>

        <Typography component="h3" variant="h6">
          Mixed Sports Society Founder and President
        </Typography>
        <Typography paragraph>
          Created a space for students who feel uncomfortable with or unable to
          participate in regular university sports clubs to participate in
          casual sport.
        </Typography>
        <Typography paragraph>
          My responsibilities include managing the budget, locating and booking
          spaces on a weekly basis, sourcing equipment for activities, and
          engaging with society members to ensure the sports played are
          appropriate and any necessary adjustments are made for those with
          additional needs.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
