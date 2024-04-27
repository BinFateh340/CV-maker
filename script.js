
function enterData() {
        // My-Name
        var name = document.getElementById('pName').value;
        document.getElementById('myName').innerText = name;
        // Title
        var title = document.getElementById('pTitle').value;
        document.getElementById('myTitle').innerText = title;
        //Address
        var colonyName = document.getElementById('pColony').value;
        document.getElementById('myColony').innerText = colonyName;

        var cityName = document.getElementById('pCity').value;
        document.getElementById('myCity').innerText = cityName;
        //contact info
        var phone = document.getElementById('pPhone').value;
        document.getElementById('myPhone').innerText=phone;
        var email = document.getElementById('pEmail').value;
        document.getElementById('myEmail').innerText=email;
        //Experience#01:
        var inst1 = document.getElementById('pInst1').value;
        document.getElementById('myInst1').innerText=inst1;

        var city1 = document.getElementById('pCity1').value;
        document.getElementById('myCity1').innerText=city1;

        var desig1 = document.getElementById('pDesig1').value;
        document.getElementById('myDesign1').innerText=desig1;

        var date1 = document.getElementById('pDate1').value;
        document.getElementById('myDate1').innerText=date1;

        var description1 = document.getElementById('pDescription1').value;
        document.getElementById('myDescription1').innerText=description1;

        //Experience#02:
        var inst2 = document.getElementById('pInst2').value;
        document.getElementById('myInst2').innerText=inst2;

        var city2 = document.getElementById('pCity2').value;
        document.getElementById('myCity2').innerText=city2;

        var desig2 = document.getElementById('pDesig2').value;
        document.getElementById('myDesign2').innerText=desig2;

        var date2 = document.getElementById('pDate2').value;
        document.getElementById('myDate2').innerText=date2;

        var description2 = document.getElementById('pDescription2').value;
        document.getElementById('myDescription2').innerText=description2;

        //Experience#03:
        var inst3 = document.getElementById('pInst3').value;
        document.getElementById('myInst3').innerText=inst3;

        var city3 = document.getElementById('pCity3').value;
        document.getElementById('myCity3').innerText=city3;

        var desig3 = document.getElementById('pDesig3').value;
        document.getElementById('myDesign3').innerText=desig3;

        var date3 = document.getElementById('pDate3').value;
        document.getElementById('myDate3').innerText=date3;

        var description3 = document.getElementById('pDescription3').value;
        document.getElementById('myDescription3').innerText=description3;



        //college education:
        var college = {
                name : document.getElementById('clgName').value,
                city : document.getElementById('clgCity').value,
                dept : document.getElementById('clgDept').value,
                date : document.getElementById('clgDate').value,
                description : document.getElementById('clgDescription').value
        }
        document.getElementById('myclgName').innerText = college.name;
        document.getElementById('myclgCity').innerText = college.city;
        document.getElementById('myclgDept').innerText = college.dept;
        document.getElementById('myclgDate').innerText = college.date;
        document.getElementById('myclgDescription').innerText = college.description;

        //school education:
        var school = {
                name : document.getElementById('schlName').value,
                city : document.getElementById('schlCity').value,
                dept : document.getElementById('schlDept').value,
                date : document.getElementById('schlDate').value,
                description : document.getElementById('schlDescription').value
        }
        document.getElementById('myschlName').innerText = school.name;
        document.getElementById('myschlCity').innerText = school.city;
        document.getElementById('myschlDept').innerText = school.dept;
        document.getElementById('myschlDate').innerText = school.date;
        document.getElementById('myschlDescription').innerText = school.description;


        //skills:
        var skills = {
                skill1 : document.getElementById('pSkill1').value,
                skill2 : document.getElementById('pSkill2').value,
                skill3 : document.getElementById('pSkill3').value,
                skill4 : document.getElementById('pSkill4').value,
                skill5 : document.getElementById('pSkill5').value
        }
        document.getElementById('mySkill1').innerText = skills.skill1;
        document.getElementById('mySkill2').innerText = skills.skill2;
        document.getElementById('mySkill3').innerText = skills.skill3;
        document.getElementById('mySkill4').innerText = skills.skill4;
        document.getElementById('mySkill5').innerText = skills.skill5;

        //languages:
        var languages = {
                lang1 : document.getElementById('pLang1').value,
                lang2 : document.getElementById('pLang2').value,
                lang3 : document.getElementById('pLang3').value
        }
        document.getElementById('myLang1').innerText = languages.lang1;
        document.getElementById('myLang2').innerText = languages.lang2;
        document.getElementById('myLang3').innerText = languages.lang3;

        //courses;
                        //No#01:
        var course1 = {
                name : document.getElementById('pCrsName1').value,
                institute : document.getElementById('pCrsInst1').value,
                description : document.getElementById('pCrsDescrp1').value
        }
        document.getElementById('myCrsName1').innerText = course1.name;
        document.getElementById('myCrsInst1').innerText = course1.institute;
        document.getElementById('myCrsDescrp1').innerText = course1.description;

                        //No#02:
        var course2 = {
                name : document.getElementById('pCrsName2').value,
                institute : document.getElementById('pCrsInst2').value,
                description : document.getElementById('pCrsDescrp2').value
        }
        document.getElementById('myCrsName2').innerText = course2.name;
        document.getElementById('myCrsInst2').innerText = course2.institute;
        document.getElementById('myCrsDescrp2').innerText = course2.description;

}