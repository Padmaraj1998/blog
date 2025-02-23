import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Box, Typography, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import location_icon from "../asserts/images/location_icon.svg";
// import email_icon from "../asserts/images/email_icon.png";
// import phone_icon from "../asserts/images/phone_icon.png";
import leetcode_icon from "../asserts/images/leetcode_icon.png"
import linkedin_icon from "../asserts/images/linkedin_icon.png"
import ciar_logo from "../asserts/images/ciarlogo.png"
import creamcollar_logo from "../asserts/images/creamcollar-logo.svg"
import profile_pic from "../asserts/images/profile_pic.jpg"

function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isskills, setskill] = useState('Programming Languages');

  const skill_data = {
    "Programming Languages":{"Python":"90%","Javascript":"80%","Sql":"80%"},
    "Frontend":{"HTML5":"80%","CSS":"85%","Jquery":"70%"},
    "Frontend-Framework":{"React":"75%"},
    "Backend-Frameworks":{"Django":"75%","Flask":"80%"},
    "Library":{"Numpy":"80%","Pandas":"80%","Matplotlib":"90%","Seaboarn":"75%"},
    "Tools":{"Git":"80%", "SVN":"80%", "AWS":"40%",  "JWT":"75%", "Figma":"80%", "Postman":"80%", "Jira":"80%", "Jest":"80%"},
    "SoftSkill":{"Problem-Solving":"90%", "Leadership":"80%", "Collaboration":"75%", "Communication":"75%", "Critical Thinking":"80%"},
}

const exp ={
  "CreamCollar":{
  "companyname":"CreamCollar Edu-Tech",
  "companyImage":creamcollar_logo,
  "start_date":"15-October-2023",
  "end_date":"30-March-2024",
  "description":`CreamCollar is a service based company where they give education as a service to the students,
                 they solve the gap between student and company by giving the knowledge of product in different indutry.
                 Where I was reponsible to design website frontend for the company where it should be scalabe, flexible, 
                 responsive.Where I was told to build authentication system for user authentication, when I developed and sent to testing 
                 It had some issue related to authentication where users frequently faced authentication failures, 
                 which led to access issues and poor user experience. These errors were due to inconsistent token validation,
                 session timeouts, and API mismatches between the LMS and our authentication system.I performed a detailed 
                 log analysis to identify patterns in authentication failures. I found that expired session tokens and 
                 API request mismatches were causing most errors. Implemented token refresh mechanisms to handle session expiration properly.
                 After implementing these fixes, authentication errors dropped by 20%. To hear lot of experience please contact me`,
  },
  "CIAR":{
    "companyname":"CIAR Software Solution",
    "companyImage":ciar_logo,
    "start_date":"15-March-2021",
    "end_date":"16-October-2023",
    "description":`CIAR Software Solution is a product based company, where they had 2 product where I was working
                    on hotel product called Hoteldesk, We had system to solve problem of chain of hotel and individual hotels,
                    Where we used centrallized database to manage all our client hotel acivities and individual database for
                    each hotel which all conected with help of centralized database. Where our Bookings are made through channel manager
                    , online hotel booking, direct booking. We also had a concurrany problem in booking where we implemented locking
                    mechanism to block particuar Room Type on the time of booking in the individual database itself. 
                    We had also had slow query problem which was Identified by debug toolbar and solved it by turning the queries.
                    To hear lot of experience please contact me.
                     `,
    }
}
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const [showPopup, setShowPopup] = useState(false);
  const inprogressTask =() =>{
    // alert("Module is under-construction");

  }
function goToLinkedIn(){
    window.open("https://www.linkedin.com/in/padmaraj-s-0a279b16b", "_blank");
}
const goToLeetcode = () => {
  window.open("https://leetcode.com/u/payanraj/", "_blank");
}

const handleTabClick = (id) => {
  toggleDrawer(); // Close drawer first

  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300); // Delay scrolling until after the drawer closes
};
  return (
    <div style={{ width:'100%',}}>
      <Box sx={{ display: "flex", width:'100%' ,height: "auto" }}>
      {showPopup && (
        <div style={{
          position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius:"5%",
          textAlign:"center",
          padding: "20px",border:"5px solid red",padding:'2% 5%', background: "#EDE8D0", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}>
          <p>Module is under-construction!</p>
          <button style={{backgroundColor:"#90D5FF"}}onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
        {/* Hamburger Menu for Mobile */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            display: { xs: "block", sm: "none" }, // Show only on mobile
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 1000,
          }}
        >
          {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        {/* Left Drawer for Tabs */}
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          sx={{
            display: { xs: "block", sm: "none" }, // Only for mobile
            "& .MuiDrawer-paper": {
              width: "200px",
            
            },
          }}
        >
          {/* Left-side Tabs */}
          <Tabs
            orientation="vertical"
            variant="scrollable"
            // value={selectedTab}
            // onChange={handleTabChange}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              minWidth: "150px",
              
            }}
          >
            <Tab label="About me" onClick={() => handleTabClick("About")} />
            <Tab label="Skills" onClick={() => handleTabClick("Skills")} />
            <Tab label="Experience" onClick={() => handleTabClick("Experience")}/>
            <Tab label="Project" onClick={() => setShowPopup(1)}/>
          </Tabs>
        </Drawer>

        {/* Permanent Tabs for Larger Screens */}
        <Box
          sx={{
            
            position: "sticky", // Makes the tabs sticky
            top: 0, // Sticks the tabs to the top of the viewport
            height: "100vh",
            display:"inline-table",
            width:"auto",
            paddingLeft:{'xs':'0','sm':'5%'},
            // Keeps the background consistent
            overflowY: "auto", // Allows scrolling in the tabs if necessary
          }}
        >
          <Tabs
            orientation="vertical"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" }, // Show only for sm and larger screens
              width: "200px",
              marginTop:10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Tab
                href="#About"
                label="About me"
                sx={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  backgroundColor: "#D3D3D3",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              />
              <Tab
                href="#Skills"
                label="Skills"
                sx={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  backgroundColor: "#D3D3D3",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              />
              <Tab
                href="#Experience"
                label="Experience"
                sx={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  backgroundColor: "#D3D3D3",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              />
              <Tab
                // href="#Project"
                label="Project"
                onClick={()=>setShowPopup(true)}
                sx={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  backgroundColor: "#D3D3D3",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              />
            </div>
          </Tabs>
        </Box>
        {/* Tab Content */}
        <Box
          sx={{
           
            overflowY: "auto", // Enable vertical scrolling
            height: "auto", // Take full height of the viewport
            
            paddingLeft:'5%',
            paddingRight:'5%',
            paddingTop:{ xs: "30%", sm: "10%" },
            paddingBottom:{ xs: "30%", sm: "10%" },
            width: "100%",
          }}
        >
          {/* Conditionally render content based on selectedTab */}
          {
            <Box
              id="About"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, side-by-side on larger screens
                justifyContent: "space-between",
                minHeight:'85vh',
                gap:'10%',
                 // Space between the two sections
                width:'100%',
                borderRadius: "8px",
                
                // padding:'30px'
              }}
            >
              {/* Right Section */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth:{'xs':'100%','sm':'30%'},
                  paddingBottom:'20px'
                   // Center-align content in this section
                }}
              >
                {/* Replace with an actual image */}
                <div style= {{ width:'100%',display:'flex',alignItems:'center', justifyContent: "center",}}>
                <img
                  src={profile_pic}
                  alt="Profile"
                  style={{
                    width: "250px",
                    height:"220px",
                    borderRadius:"50%",
                    border: "2px solid black",
                  }}
                />
                </div>
                <Box sx={{left:0,gap:5}}>
                <h2 style={{margin:0,padding:5}}>Padmaraj</h2>
                <h3 style={{margin:0,padding:5}}>FullStack Developer</h3>
                <div style={{margin:0,padding:5}}>
                  <h4 style={{margin:0,padding:0}}>Social Link:</h4>
                  <div style={{marginTop:'3%',display:'flex',flexDirection:"row", gap:20}}>

                    <div style={{position:"relative",height:20,width:20,padding:0,margin:0}}>
                        <img  src={linkedin_icon} onClick={()=>goToLinkedIn()} style={{position:"absolute",height:20,width:20,}} title="www.linkedin.com/in/padmaraj-s-0a279b16b"></img>
                    </div>
                 
                    <div style={{position:"relative",height:20,width:20,padding:0,margin:0}}>
                      <img src={leetcode_icon} onClick={()=>goToLeetcode()} style={{position:"absolute",height:20,width:20,}}></img>
                    </div>
                  
                    <div style={{position:"relative",height:20,width:20,padding:0,margin:0}}>
                      <img src={location_icon} title="Bangalore/Chennai" style={{position:"absolute",height:20,width:20,}}></img>
                    </div>
                    
                    
                  </div>
                </div>
                </Box>
              </Box>
              {/* Left Section */}
              <Box
                sx={{
                  flex: 1,
                  
                }}
              >
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="body1">
<p>I am a passionate Full Stack Developer with 3 years of experience in designing, developing, and deploying web applications. My expertise spans across frontend and backend technologies, where I build scalable, high-performance applications with a focus on user experience and system efficiency.</p> 
<p>I have a strong foundation in Flask, JavaScript, React, Python, and SQL, along with a keen interest in cloud technologies and microservices architecture.</p>

<p>Throughout my career, I have worked on multiple projects, including Propery Management Solution (PMS) and Learning Management System (LMS) integrations. These experiences have sharpened my problem-solving skills, allowing me to optimize system performance, reduce authentication errors, 
  and enhance user engagement. My ability to troubleshoot and resolve technical challenges efficiently has significantly contributed to improving product stability and user satisfaction.</p>

<p>I am passionate about continuous learning and innovation. Whether it's exploring new frameworks, understanding complex data structures, or optimizing backend APIs, I am always eager to push my boundaries. Additionally, I enjoy collaborating with cross-functional teams, ensuring seamless communication between developers, designers, and stakeholders.</p>

<p>Beyond coding, I have a deep love for cricket and enjoy analyzing matches, discussing strategies, and following my favorite teams. I strongly believe in work-life balance and seek a job that not only challenges me technically but also brings happiness and fulfillment.</p>

Currently, I am exploring opportunities as a Full Stack Developer, Backend Developer, or Frontend Developer where I can leverage my skills to contribute meaningfully while growing in a dynamic environment. My ultimate goal is to build products that make a difference and provide seamless digital experiences to users worldwide.


                </Typography>
              </Box>
            </Box>
          }

          {
             <Box
             id="Skills"
             sx={{
               display: "block",
               height:'auto',
               minHeight:{'xs':'auto','sm':"85vh"},
               borderRadius: "8px",
               padding:'30px 0'
             }}
           >
              <Typography variant="h4" style={{marginBottom:"50px"}}>Skills</Typography>
              <Typography variant="body1">
                <div
                style={{
                  display:"flex",
                  flexDirection:"row",
                  gap:20,
                  flexWrap:"wrap",
                  marginBottom:"50px"
                }}
                >
                  {Object.entries(skill_data).map(([skills])=>(
                  <div style={{border:"1px solid black",boxShadow: "2px 2px 4px #000000",borderRadius:"10px",minWidth:"80px",height:"30px",padding:"10px",justifyContent:"center",alignItems:"center",display: "flex",cursor:"pointer"}} onClick={()=>setskill(skills)}>{skills}</div>
                ))}
                 </div>
                {Object.entries(skill_data).map(([category]) => ( (isskills===category) &&
                <div id={category}>
                  <h3>{category}:</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    {Object.entries(skill_data[category]).map(([skill])=>(
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
                      <h4 style={{margin:0,padding:0,width:"180px"}}>{skill}</h4>
                      <div style={{height:"20px",width:"300px",borderRadius:"10px",backgroundColor:"grey"}}>
                        <div style={{height:"20px",width:skill_data[category][skill],borderRadius:"10px",backgroundColor:"green"}}></div>
                      </div>
                      <h4 style={{margin:0,padding:0,}}>{skill_data[category][skill]}</h4>
                    </div>
                    ))}
                   
                  </div>
                </div>
                ))}
              </Typography>
            
           </Box>
          }

          {
             <Box
             id="Experience"
             sx={{
              display: "block",
              height:'auto',
              borderRadius: "8px",
              // padding:'30px',
              width:"100%"
             }}
           >
              <Typography variant="h4" style={{marginBottom:"50px"}}>Experience</Typography>
             {/* Right Section */}
            {Object.entries(exp).map(([company])=> (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, side-by-side on larger screens
                justifyContent: "space-between",
              
                 // Space between the two sections
                width:'100%',
                height:'auto',
                borderRadius: "8px",
                paddingBottom:"5%",
                //padding:'30px'
              }}
            >
              {/* Right Section */}
              <Box
                sx={{
                  flex: 1,
                  flexDirection:"column",
                  maxWidth:{xs:'100%','sm':'30%'},
                  padding:'30px',
                  paddingTop:'0px'
                   // Center-align content in this section
                }}
              >
                {/* Replace with an actual image */}
                <img
                  src={exp[company]["companyImage"]}
                  alt="Profile"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    border: "2px solid black",
                  }}
                />
                <Box sx={{left:0,gap:5,}}>
                <h2 style={{margin:0,padding:5}}>{exp[company]["companyname"]}</h2>
                <h3 style={{margin:0,padding:5}}>{exp[company]["role"]}</h3>
                <h4 style={{margin:0,padding:5}}>{exp[company]["start_date"]} - {exp[company]["end_date"]}</h4>
               
                </Box>
              </Box>
              {/* Left Section */}
              <Box
                sx={{
                  flex: 1,
                  
                }}
              >
               
                <Typography variant="body1">
                {exp[company]["description"]}
                </Typography>
              </Box>
            </Box>
             ))}
           </Box>
          }

          {
            <Box
            id="Project"
            sx={{
              display: "none",
              height:'80vh',
              borderRadius: "8px",
              padding:'30px'
            }}
          >
              <Typography variant="h4">Project</Typography>
              <Typography variant="body1">
                This is the Project content...
              </Typography>
              <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </Box>
          }
        </Box>
      </Box>
    </div>
  );
}

export default Home;
