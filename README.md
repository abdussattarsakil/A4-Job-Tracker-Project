# A4-Job-Tracker-Project

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:-
.
getElementById দিয়ে id এর মাধ্যমে কোনো একটি এলিমেন্ট খুঁজে
.

getElementsByClassName দিয়ে class এর মাধ্যমে একাদিক এলিমেন্ট খুঁজে
html collection দেয়
.

querySelector = CSS selector দিয়ে প্রথম matching element খুঁজে
সেইম নাম এ যদি একাদিক ক্লাস থাকে তাহলে html এ প্রথম যেই ক্লাস সেই টা দেয়
.

querySelectorAll = CSS selector দিয়ে সকল matching element খুঁজে
সেইম নাম এ যদি একাদিক ক্লাস থাকলেও সকল এলিমেন্ট গুলো দেয়
node list দেয়
.

------------------------------------------------------------------------------
2. How do you create and insert a new element into the DOM?
Ans:-
step:1- নতুন এলিমেন্ট টা যেই প্যারেন্ট ট্যাগ এ রাখবো তাকে একটা ভ্যারিয়েবল এ স্টোর করবো
step:2-  createElement() method দিয়ে নিউ একটা এলিমেন্ট তৈরি করে তাকেও একটা ভ্যারিয়েবল এ স্টোর করা
step:3- তৈরী করা নিউ এলিমেন্ট এ কনটেন্ট অ্যাড করা - innerText / innerHTML এর মাধ্যমে
step:4- প্যারেন্ট এলিমেন্ট এ append() করে দিবো create করা নিউ এলিমেন্ট কে  

-------------------------------------------------------------------------------

3. What is Event Bubbling? And how does it work?
Ans:-
Event Bubbling হলো event যেখানে ঘটে সেখান থেকে উপরের এলিমেন্ট গুলো acess করা।
event DOM ট্রি এর নিচ থেকে উপর দিকে উঠে

Event Bubbling যেভাবে কাজ করে -
প্রথমে যে এলিমেন্টটিতে ইভেন্টটি ঘটানো হয় তার ইভেন্ট লিসেনার ট্রিগার হয় তারপর ইভেন্ট টি তার উপরের এলিমেন্ট এ যায় সেখানে কোনো ইভেন্ট লিসেনার পাইলে সেটি ট্রিগার হয় কিন্ত উপরের এলিমেন্ট এ কোনো ইভেন্ট লিসেনার না থাকলে সেই event সেখানে trigger হয় না কিন্তু bubbling থেমে যায় না — event তার উপরের দিকে যাওয়া চালিয়েই যায় , এইভাবে সিরিয়ালি উপরের প্যারেন্ট এ যাইতে যাইতে পুরো ডোম ট্রি এর ডকুমেন্ট পর্যন্ত যায়

---------------------------------------------------------------------------------
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:-
Event Delegation হলো প্রতিটি এলিমেন্ট এ আলাদা আলাদা ইভেন্ট লিসেনার না দিয়ে প্যারেন্ট এলিমেন্ট এ ইভেন্ট লিসেনার অ্যাড করে সেই প্যারেন্ট দিয়েই সব child এর ইভেন্ট হ্যান্ডেল করা।

why it is usefull-
কারণ একাধিক ইভেন্ট লিসেনার অ্যাড না করে প্যারেন্ট এলিমেন্ট কে ইভেন্ট লিসেনার অ্যাড করে functionParameter.target দিয়ে জানা যায় ঠিক কোন এলিমেন্ট এ ইভেন্ট ট্রিগার হইসে।
ওই প্যারেন্ট এলিমেন্ট এ নিউ এলিমেন্ট অ্যাড করলেও সেই এলিমেন্টেও ইভেন্ট লিসেনার পায় নতুন করে ইভেন্ট লিসেনার অ্যাড করা লাগে না।
কোড কম লেখা লাগে
Code Readable & Maintainable হয়  

----------------------------------------------------------------------------------
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:-
.
stopPropagation() হলো একটি method যা Event Bubbling বন্ধ করে দেয়। event যে element এ আছে, সেখানেই ইভেন্ট বন্ধ হয়ে যাবে , আর উপরের প্যারেন্ট এলিমেন্ট এ যাবে না
.

.
preventDefault() -browser এর ডিফল্ট কাজ গুলা বন্ধ করে দেয় যেমন লিংক এ ক্লিক করলে নিউ পেজ আসা বন্ধ করে দেয়
.
