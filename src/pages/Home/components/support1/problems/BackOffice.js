import React, {useEffect, useState} from "react";

import "./Checks.css";
import SPBO1 from "./problem-pic/backoffice/SPBO1";
import SPBO2 from "./problem-pic/backoffice/SPBO2";
import SPBO3 from "./problem-pic/backoffice/SPBO3";
import SPBO4 from "./problem-pic/backoffice/SPBO4";
import SPBO5 from "./problem-pic/backoffice/SPBO5";
import SPBO6 from "./problem-pic/backoffice/SPBO6";
import SPBO7 from "./problem-pic/backoffice/SPBO7";
import SPBO8 from "./problem-pic/backoffice/SPBO8";
import SPBO9 from "./problem-pic/backoffice/SPBO9";
// import {Content} from "../../../MODELS/Content";
import {getData} from "../../../CallService";
// import {putData} from "../../../CallService";
import axios from "axios";


function BackOffice(){

   const  [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getData()
            .then(items => {
                if(mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])

// console.log(list);


    // const handleSave = (id, updatedContent) => {
    //     putData(`/content/${id}`, updatedContent)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    //
    // function updateContent(id, updatedText) {
    //     fetch(`/content/${id}`, {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(updatedText)
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Failed to update content');
    //             }
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             // Handle the error
    //         });
    // }



    // const handleContentChange = (id, newContent) => {
    //     const newList = list.map((item) => {
    //         if (item.id === id) {
    //             return { ...item, solution: newContent };
    //         } else {
    //             return item;
    //         }
    //     });
    //     setList(newList);
    //     putData(id, newContent).then((response) => {
    //         console.log(response);
    //     })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    // const handleContentChange = (event, id) => {
    //     const newContent = event.target.textContent;
    //     axios.put(`http://localhost:8080/${id}`, {content: newContent})
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    const handleContentChange = (id, newContent) => {
        axios.put(`http://localhost:8080/${id}`, {content: newContent.toString()})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(newContent);

        return newContent;
    }


    return (

        <div className={"check"}>
            <h1>-משרד אחורי-</h1>
            <h2 id="mg">משרד אחורי לא עולה</h2>
            <h4>קובץ hosts</h4>

            {list.map(function(item) {
                return (
                    <p
                        key={item.id}
                        contentEditable={true}
                        onInput={function(e) {
                            handleContentChange(item.id, e.target.textContent);
                        }}
                    >
                        {item.solution}
                    </p>
                )
            })}




            <p>קובץ Hosts </p>
            <p>מושך את הקובץ לקופה בה חסר הקובץ לאותו המיקום בכונן C ע"פ הנתיב</p>
            <p>כניסה לתוכנת קופה</p>
            <p>וידוא תקינות</p>

            <h4>משרד אחורי לא עולה – Internet Explorer</h4>
            <ol>
                <li className="short">תוצג שגיאה בדפדפן: "Message from WebPage"</li>
                <li>יש להיכנס לכדה"א בתוכנת קופה</li>
                <li>הגדרות דפדפן</li>
                <li>גלגל</li>
                <li>Internet options </li>
                <li>הגדרות מתקדמות</li>
                <li>Reset</li>
                <li>יש לסמן "וי" בחלון שיקפוץ</li>
                <li>אישור אתחול</li>
                <li>הגדרת תאימות</li>
                <li className="short">
                    יש להוסיף ADD על הכתובת DNS – Compatibility View Settings
                </li>
                <li>לסגור דפדפן</li>
                <li>להעלות משרד אחורי</li>
                <li className="short">
                    להכניס פרטי לקוח (יש רשתות לדוגמה: רנואר, טוונטי פור סבן שיש להם קובץ
                    Tabule. Ini שנמצא בתיקיית ווינדוס בכונן C, לאחר שמעבירים אותו למחשב,
                    משרד אחורי ייכנס ללא סיסמה רק כאשר המחשב הוא חדש לאחר פירמוט).
                </li>
                <li className="short">
                    אם מדובר במחשב חדש, צריך לאפשר Allow to popups דרך allow all the time
                    לחלונות קופצים.
                </li>
            </ol>
            <h4>משרד אחורי לא עולה – Google Chrome</h4>
            <ol>
                <li>לאחר שנראתה הודעת שגיאה בדפדפן</li>
                <li>יש להיכנס הגדרות דפדפן (למעלה מצד שמאל/ימין 3 נקודות)</li>
                <li>Reset and clean up</li>
                <li>Restore settings to their originals defaults</li>
                <li>Reset Settings</li>
                <li>להעלות משרד אחורי מחדש לאחר ביצוע ריענון דפדפן</li>
                <li>לוודא תקינות</li>
            </ol>
            <SPBO1/>
            <h2 id="browser">הגדרת דפדפן ברירת מחדל</h2>
            <ol>
                <li className="short">
                    יש לחפש במחשב: Choose a Defaule Web Browser או להיכנס להגדרות ואז לחפש
                    Browser
                </li>
                <li>לבחור באקספלורר כדפדפן ברירת מחדל</li>
                <li>להיכנס מתוכנת קופה למשרד אחורי ולוודא תקינות</li>
                <li>במידה ודפדפן מסוג Edge עדיין נפתח, יש להיכנס בדפדפן זה:</li>
                <li>הגדרות</li>
                <li>דפדפן ברירת מחדל</li>
                <li><b>לשנות ב-Compatibility:</b></li>
                <li>לשנות ל-Never</li>
                <li>לשנות ל-Don’t allow</li>
                <li>לצאת מדפדפן Edge </li>
                <li>להיכנס למשרד האחורי ולוודא תקינות – פתיחת Explorer</li>
            </ol>
            <SPBO2/>
            <h2 id="login">הסרת סיסמה מכניסה למשרד אחורי</h2>
            <p>
                יש לקחת קובץ Tabula.ini מסניף אחר באותה רשת ולהעביר לתיקיית C > windows
            </p>
            <p>משרד אחורי ישמור את נתוני הכניסה</p>
            <h2 id="setuser">הודעת SETUSER</h2>
            <p className="short">
                במקרה של הודעת Setuser בעת העלאת תוכנת קופה, יש להעביר ללקוח את כל
                תיקיית Priority מהטרמינל לקופת הלקוח לכונן C
            </p>
            <p>נתיב לתיקייה: C:\setup</p>
            <SPBO3/>
            <h2 id="cer">שגיאת סרטיפיקציה</h2>
            <p><b>הגדרה</b></p>
            <p className="short">
                סרטיפיקציה = תעודת אישור, בעל הדומיין (האתר) מנפיק אותה מול אחת החברות
                המוכרות בשוק (godaddy/digicert/Thawte ועוד) בעצם כל חברה המאושרת ע"י CA
                (ארגון שאחראי על הנושא)
            </p>
            <p><b>מה זה אומר בפועל אתה שואל? </b></p>
            <SPBO4/>
            <p>בכל דפדפן כאשר נלחץ על המנעול נוכל להיכנס ולצפות בפרטי הסרטיפיקציה</p>
            <p className="short">
                הנפקת הסרטיפיקציה בעצם מקנה לאתר (ולשרת בעצם) ולידציה שהוא בטוח. יש
                שימוש בתקן SSL (המנעול החביב בצד הכתובת, ראה תמונה), תקן SSL מדבר כמובן
                על HTTPS (פורט 443) בכל דפדפן כאשר נלחץ על חברינו המנעול נוכל להכנס
                ולצפות בפרטי הסרטיפיקציה - מי המנפיק שלה? מה התוקף? מה תאריך ההנפקה?
                ועוד..
            </p>
            <p><b>השגיאה:</b></p>
            <SPBO5/>
            <p><b>למה זה קורה בכניסה ל-Market Gate?</b></p>
            <p className="short">
                התקלה צצה לאחר שדרוג מרקטגייט, מדובר במעבר אבטחתי מ-HTTP (פורט 80) הפחות
                מאובטח  ל-HTTPS (פורט 443) היותר מאובטח.
            </p>
            <p><b>מדוע תקלה זו קורית בקופה?</b></p>
            <p className="short">
                מכיוון שהקופות הן בעצם IPVPN הן אינן יוצאות לאינטרנט - לכן הן לא יכולות
                לפנות לCA (Certificate Authorization) ולבקש להוריד במידה ויש את
                הסרטיפיקציה המתאימה על מנת שהמחשב ידע שהאתר הזה אכן מה שהוא אומר שהוא.
            </p>
            <ol>
                <li>נתקין את הסרטיפיקציה באופן ידני:</li>
                <li>ניכנס לתיקיה L:\SUPPORT\Shirb\certs</li>
                <li className="short">
                    שם נמצאות מרבית התעודות של הלקוחות בהם אנחנו מכירים כי היה שדרוג
                    לאחרונה
                </li>
                <li>נעביר את הקובץ הרלוונטי לקופה ונפתח אותו </li>
                <li>נלחץ על install ואז next</li>
                <li className="short">
                    במסך השלישי נסמן לפי התמונה הבאה (נלחץ על browse ואז החלונית הקטנה
                    תפתח)
                </li>
                <li>לאחר מכן שוב next </li>
                <li>ואז finish </li>
                <li>ייקח מספר שניות ואז תופיע הודעה "Import successful" </li>
                <li>זהו סוף התהליך!</li>
            </ol>
            <SPBO6/>
            <h2 id="info">משתמש למשרד אחורי</h2>
            <p className="short">
                <b>תקלה:</b> - SC22053636 הודעת שגיאה במשרד אחורי, בפועל המשתמש לא היה
                פעיל
            </p>
            <p className="short">
                <b>פיתרון:</b> המשתמש לא היה פעיל בפריורטי, יש להפנותו למשרדים ולסמן דגל
                לפי התמונה נתיב בפריורטי: מנהל המערכת > תחזוקת מערכת > משתמשי מערכת >
                משתמשי מערכת
            </p>
            <SPBO7/>
            <h2 id="order">תעודה לא נמצאה ע"י לקוח במשרד אחורי</h2>
            <p className="short">
                <b>תקלה:</b> SC22053797 - תעודה לא נמצאת במשרד אחורי, לא בוצע חיפוש במסך
                הנכון בפריורטי
            </p>
            <p className="short">
                <b>פיתרון:</b> להלן המסך הנכון – משלוחים ללקוח, התעודה הייתה שייכת למסך
                זה.
            </p>
            <SPBO8/>
            <h2 id="extension">התקנת תוסף ל-Priority Web</h2>
            <p>במידה והמשרד האחורי בתצורת Priority Web וישנה הודעת שגיאה</p>
            <p>יש להתקין את התוסף בדפדפן Chrome</p>
            <p>
                נבדוק האם הדפדפן הותקן על-ידי לחיצה על הגדרות (3 נקודות למעלה מצד
                שמאל/ימין)
            </p>
            <p>Extensions</p>
            <SPBO9/>
            <p>במידה ותוסף זה אינו מופיע, נוריד אותו מהקישור בשגיאה</p>
        </div>


    );
}



















        /***********************************************/



export default BackOffice;