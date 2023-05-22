import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import img from "../../img/chat-bot.png";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";

import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { red } from "@mui/material/colors";
import { UserContext } from "../Product/UserContext";

export default function ChatbotComp() {
  const [first, setfirst] = React.useState([]);
  const [text, setText] = React.useState();

  const defaultans =
  "I am not able to find any information related to your query.Would you like to contact us? contact :9552589909";
  let question = [
    // { qn: "Gold rate", ans: "55000" },
    // { qn: "silver rate", ans: "71.10 /gm" },
    // { qn: "Dimond rate", ans: defaultans },
    {qn:"Hi,Hii,Hello,Hey",ans:"Welcome to the Vaishnavi Jewellery Shop!! How Can I help you?"},
    { qn: "Shop time,What is Shop time?,When shop open", ans: "Monday-Saturday 11.00 am-8.00 pm" },
    { qn: "Email ,mail", ans: "thinkup.vaishnavijewellers@gmail.com" },
    { qn: "Online delivery,COD,online shipping", ans: defaultans },
    {qn:"phone",ans:'Contact:9552589909'},
    {
      qn: "address,location,map,place,shop address",
      ans:"Jagdale Residancy,Shop No.4,Near Police Station Khanbhag,Sangli Contact:9552589909"
  },
  {
      qn: "min amount,rate,rupees,interest,rate",
      ans: 1000
  },
  
  {
      qn: "goldrate,rate,today gold rate,current gold rate",
      ans: 15000
  }
  ];
//   const vjchatbot = (searchStr) => {
//     let mostMatchedString = '';
//     let maxWordMatches = 0;

//     // split the search string into an array of words
//     const searchWords = searchStr.split(' ');
//     let wordMatches = 0;

//     question.forEach(str => {
//         // split the current string into an array of words
//         const strWords = { ...str }
//         // console.log(strWords.que)

//         // count the number of word matches
//         wordMatches = 0;
//         for (const prop in str) {
//             if (prop == 'que') {
//                 const data = str[prop].split(',');
//                 // console.log(data)
//                 data.forEach(strWord => {
//                     const val = strWord.split(' ');
//                     // console.log(val);
//                     val.forEach(search => {
//                         if (searchWords.includes(search)) {
//                             wordMatches++;
//                         }
//                     })

//                 });
//                 //  console.log(wordMatches);
//             }

//         }
//         if (wordMatches > maxWordMatches) {
//             mostMatchedString = str;
//             maxWordMatches = wordMatches;
//         }
//     });
//     if (wordMatches <= 0) {
//         return defaultans;
//     }
//     return mostMatchedString.ans;
// }
  const { setSearch, setChathide, chathide } = useContext(UserContext);

  const bottomRef = useRef(null);

  const wordcount = (str, matchtext) => {
    // var count = str.split(matchtext).length - 1;
    const count = str.length - str.replaceAll(matchtext, "").length;
    return count;
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      
      setChat("user");
    }
  };
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [first]);
  let search = "";
  const setChat = (type) => {
    let chat = {};
    let Alexchat = {};
    let maxmatch = [];
    let ismatch = 0;
    let mostMatchedString = '';
    let maxWordMatches = 0;

    const searchWords = type.split(' ');
    let wordMatches = 0;
    // alert("");
    question.forEach((element, index) => {
      // alert(element.qn);
      // split the current string into an array of words
      const strWords = { ...element }
      wordMatches = 0;
      for (const prop in element) {
          if (prop == 'qn') {
              const data = element[prop].split(',');
              // console.log(data)
              data.forEach(strWord => {
                  const val = strWord.split(' ');
                  // console.log(val);
                  val.forEach(search => {
                      if (searchWords.includes(search)) {
                          wordMatches++;
                      }
                  })
                })
              }}
      let x = wordcount(element.qn.toLowerCase(), text.toLowerCase());
      if (x > 0) {
        ismatch = 1;
      }
      maxmatch.push(x);
      // alert(x);
    });
    let max_count_index = maxmatch.indexOf(Math.max(...maxmatch));

    if (type == "user") {
      chat = {
        type: "user",
        text: text,
        alexa: ismatch == 0 ? defaultans : question[max_count_index].ans,
        textalign: "right",
      };
    }

    let newArry = [...first, chat];
    setfirst(newArry);

    setText("");
  };
  // let setChat = (searchStr) => {
  //   let mostMatchedString = '';
  //   let maxWordMatches = 0;
  //   let chat = {};
  //   let ismatch = 0;
  //   // split the search string into an array of words
  //   const searchWords = searchStr.split(' ');
  //   let wordMatches = 0;

  //   question.forEach(str => {
  //       // split the current string into an array of words
  //       const strWords = { ...str }
  //       // alert(JSON.stringify(searchWords))

  //       // count the number of word matches
  //       wordMatches = 0;
  //       for (const prop in str) {
  //           if (prop == 'qn') {
  //               const data = str[prop].split(',');
  //               // console.log(data)
  //               data.forEach(strWord => {
  //                   const val = strWord.split(' ');
  //                   // console.log(val);
  //                   val.forEach(search => {
  //                       if (searchWords.includes(search)) {
  //                           wordMatches++;
  //                       }
  //                   })

  //               });
  //               //  console.log(wordMatches);
  //               // alert(JSON.stringify(maxWordMatches));
  //           }

  //       }
  //       if (wordMatches > maxWordMatches) {
  //           mostMatchedString = str;
  //           maxWordMatches = wordMatches;
  //       }
  //   });
  //           // alert(JSON.stringify(mostMatchedString));
  //   if (wordMatches <= 0) {
  //     return defaultans;
  // }
  // return mostMatchedString.ans;
  //   let max_count_index = maxWordMatches.indexOf(Math.max(...maxWordMatches));

  //   if (searchStr == "user") {
  //     chat = {
  //       type: "user",
  //       text: text,
  //       alexa: ismatch == 0 ? defaultans : question[max_count_index].ans,
  //       textalign: "right",
  //     };
  //   }

  //   let newArry = [...first, chat];
  //   setfirst(newArry);

  //   setText("");
  // };
  return (
    <div >
      <Grid container spacing={0} sx={{ 
        position: "relative",
         width: "25vw" ,
         display:chathide,
          overflowY:"scroll",
          height:"70vh",
          backgroundColor:"white",
          // marginBottom:-4
          }}>
        <Grid item xs={12} md={12} sx={{ }}>
          <div
            style={{
              display: "flex",
              position: "fixed",
              
              top:130,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 27,
              fontFamily:"sans-serif",
              padding:"8px",
              // marginTop:-50,
              // marginLeft:"-16px",
              borderTopLeftRadius:"10px",
              borderTopRightRadius:"10px",
              // height: "auto",
              width: "24vw",
              backgroundColor: "#3BB3D3",
              
            }}
          >
            {/* <CloseIcon
            style={{color: "black", height:"60%",width:"70%"}}
            /> */}
            <CloseIcon
              onClick={() => {
                setChathide("none");
              }}
              sx={{
                height: "80px",
                fontSize: "30px",
                color: "#06245B",
                cursor: "pointer",
                position: "absolute",
                top: -20,
                right: 5,
              }}
            ></CloseIcon>
            Chat With Us
          </div>

          {first.map((row) => {
            let start_end = row.textalign == "right" ? "end" : "start";
            // alert()
            return (
              <div ref={bottomRef}
              style={{ 
                display:"block",
                border: "2px",
              padding:"5px",
              paddingTop:"5px",
              paddingBottom:"100px",
              // width:"auto ",
              height:"100px",
              overflow:"hidden",
              
              }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: start_end,
                    marginBottom: "10px",
                    width: "auto",
                   
                  }}
                >
                  <div
                    style={{
                      gap: 4,
                      maxWidth: 200,
                      display: "flex",
                      justifyContent: start_end,
                      width: "auto",
                      borderRadius: "20px",
                      backgroundColor: "#EFEFEF",
                      padding: "20px",
                    }}
                  >
                    {row.text}
                    <AccountCircleIcon style={{ color: "blue" }} />{" "}
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "start",
                    width: "100vw",
                    
                  }}
                >
                  <div
                    style={{
                      gap: 4,
                      maxWidth: 300,
                      display: "flex",
                      // justifyContent: start_end,
                      alignItems: "center",
                      width: "auto",
                      borderRadius: "20px",
                      backgroundColor: "#BEDBBB",
                      padding: "10px",
                    }}
                  >
                    <img src={img} style={{ width: "30px", height: "30px" }} />{" "}
                    {row.alexa}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            position: "fixed",
            bottom: 24,
            width: "25vw",
            
            // marginLeft:"-15px",
            
          }}
        >
          <FormControl
            fullWidth
            variant="outlined"
            style={{
              width: "100%",
              // position: "fixed",
              // bottom: 0,
              
              background: "white",
            }}
          >
            <OutlinedInput
              multiline
              fullWidth
              id="outlined-adornment-weight"
              placeholder="type here..."
              endAdornment={
                <InputAdornment position="end"
                >
                  <SendIcon
                    style={{ cursor: "pointer", color: "blue" }}
                    
                    
                      onClick={(e) => {
                        // alert(JSON.stringify());
                        setChat("user"); 
                      }}
                      
                  />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
