# 03-Password-Generator

## Random Password Generator Tool

My motivation was overcoming my frustrations. Javascript is a completely new language for me. The amount of times I got stumped and felt like I was never go to figure it out or find the answer, really pushed me to keep going. I built this project to help my understanding. The trial and error helped with figuring what works, what doesnt and what things do. A randomized password generator helps users create more secure passwords for them, after they choose the length and what specific criteria to include. In this project, we were given starter code, so the primary focus was javascript. I learned confitional statenents and functions the most. I made no modifications to the HTML or CSS provided, which is why those do not have comments.


## Installation

N/A

## Usage

To use this password generator you will first start off here<br>
<img width="1280" alt="pwgen" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/5cad9b8b-0f34-43ab-af2d-2f13858f6783"><br>
<br>
To start the prompts, the user must click the generate password button. When pressed, it will bring up a series of prompts that explains the criteria needed.<br>
<br>
<img width="1273" alt="pwgen-firstprompt" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/0ca13abc-3334-4967-b627-e3064bcb8be2"><br>
<img width="1270" alt="pwpromptcrit" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/dfb375f8-bb0e-44b8-9290-dd90c34099a3"><br>
<img width="1280" alt="pwpromptcrit2" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/09654e30-7be8-48ba-9abf-2a7586d0f475"><br>
<br>
The next prompt will ask the user if they would like to continue.<br>
<img width="1280" alt="pwcontinue" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/f950283f-20ff-4aab-a384-0030c7150657"><br>
<br>
When the user presses "cancel" then an alert message displays and then exits the prompts.<br>
<img width="1272" alt="pwseeyounexttime" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/c919bdc6-2ab1-48c0-9b50-e9b2b3257c08"><br>
<br>
When the user presses "OK", the next prompt asks the user to enter how many characters they would like their password to be. Between 8 - 128 characters.<br>
<img width="1269" alt="pwlength" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/dddb56b9-6148-431d-b3a2-35ae788b9e7f"><br>
<br>
When the user inputs less than 8 or more than 128 characters, an alert message is displayed and exits the prompts.<br>
<img width="1273" alt="pwpleasestartagain" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/47761ed5-5f4c-4d64-b4e6-503070b28ead"><br>
<br>
When the user inputs a valid number, an alert messages displays their choice.<br>
<img width="1274" alt="pwlengthconfirm" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/dcaff458-1dcb-4146-9ab5-375f8da81321"><br>
<br>
The next prompt will ask if the user would like to include uppercase letters.<br>
<img width="1274" alt="uppercaseconfirm" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/81127c85-67a3-4d1a-8699-4ebde7f12c87"><br>
<br>
When the user presses "cancel", it will display they chose to exclude uppercase letters and then will move on to asking if they would like to include lowercase letters.<br>
<img width="1273" alt="cancelexclude" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/2d0cb386-9db9-449c-9d91-3fb7d21a435d"><br>
<img width="1274" alt="lowercaseconfirm" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/2809626b-6fa9-4381-96bc-5712b21e03f0"><br>
<br>
When a user presses "OK", a message is displayed they chose to inclue lowercase letters. This will apply to the numbers and symbols prompt as well.<br>
<img width="1272" alt="okinclude" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/22656cef-e1ce-434f-859d-809de613fb5b"><br>
<br>
After all specific criteria is selected, an alert message will display the users choices.<br>
<img width="1270" alt="lengthcritconfirm" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/7a772d22-66b7-4b6f-a083-d84dc3457cf4"><br>
<br>
Finally, the generated randomized password will be displayed in the area above the generate password button.<br>
<img width="1270" alt="generatedpassworddisplay" src="https://github.com/samamiraa/03-Password-Generator/assets/146762114/ba796f51-d91f-471b-8932-91e47abaca8e"><br>

## Credits

I was able to refer to the course materials from weeks 03 - Javascript 04 - API's and thank you to my tutor Andrew who helped in areas where I was unable to figure it out or find the solution online.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.educative.io/blog/javascript-loops-tutorial?utm_campaign=coding_interview_pattern&utm_source=google&utm_medium=ppc&utm_content=pmax&utm_term=&eid=5082902844932096&utm_term=&utm_campaign=%5BNew+-+Nov+23%5D+PMAX-Coding+Interview+Patterns&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=20757269941&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTcLrtlAtGEFdKsKcG7r54pPDB8uikaT9Tcy7RlJGMeu0b8D8XNwqm8aAiRKEALw_wcB
https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/jsref/jsref_random.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

## License

The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.

## Badges

N/A

## Features

N/A

## How to Contribute

N/A

## Tests

Please find the live URL here and refer to the usage section for a tutorial for some guidance.
https://samamiraa.github.io/03-Password-Generator