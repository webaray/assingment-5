
<h1>1. What is the difference between var, let, and const?</h1>

var, let, এবং const — এই তিনটি JavaScript-এ ভ্যারিয়েবল ডিক্লেয়ার করার জন্য ব্যবহার করা হয়। তবে এদের মধ্যে কিছু পার্থক্য আছে।

var: পুরোনো পদ্ধতি। এটি একই ভ্যারিয়েবল আবার declare করা যায় এবং scope একটু কম নিরাপদ।

let: নতুন পদ্ধতি। এটি block scope মেনে চলে এবং একই নামে আবার declare করা যায় না।

const: এটাও block scope মেনে চলে, কিন্তু একবার value দিলে পরে change করা যায় না।

যদি সহজভাবে বলি:
var পুরোনো, let পরিবর্তন করা যায়, const পরিবর্তন করা যায় না।


<h1>2. What is the spread operator (...)? </h1>

Spread operator (...) ব্যবহার করা হয় একটি array বা object এর সব element বা property আলাদা করে বের করার জন্য।

উদাহরণ:
যদি একটি array থাকে [1,2,3] তাহলে ... ব্যবহার করলে এগুলো আলাদা হয়ে যায়।

এটি সাধারণত array copy করা বা দুইটা array একসাথে করার জন্য ব্যবহার করা হয়।


<h1>3️. What is the difference between map(), filter(), and forEach()?</h1>

এই তিনটি method array এর উপর কাজ করে, কিন্তু তাদের কাজ আলাদা।

map(): array এর প্রতিটি element এর উপর কাজ করে এবং নতুন একটি array return করে।

filter(): শর্ত অনুযায়ী কিছু element বেছে নিয়ে নতুন array তৈরি করে।

forEach(): শুধু প্রতিটি element এর উপর কাজ করে কিন্তু কোনো নতুন array return করে না।

যদি সহজভাবে বলি:

map() → নতুন array বানায়

filter() → শর্ত অনুযায়ী data বেছে নেয়

forEach() → শুধু loop চালায়


<h1>4. What is an arrow function?</h1>

Arrow function হলো JavaScript-এ function লেখার একটি ছোট এবং সহজ পদ্ধতি।

আগে function লিখতে অনেক বড় syntax লাগতো, কিন্তু arrow function ব্যবহার করলে কম কোডে লেখা যায়।

এতে => চিহ্ন ব্যবহার করা হয়।


<h1>5️. What are template literals?</h1>

Template literals ব্যবহার করা হয় string এর ভিতরে সহজভাবে variable বা expression যোগ করার জন্য।

এটি লিখতে backtick ( ) ব্যবহার করা হয়।

এর মাধ্যমে string এর মধ্যে variable বসানো বা multi-line string লেখা সহজ হয়।

সহজভাবে বললে, template literals string লেখাকে আরও সহজ এবং পরিষ্কার করে।

Humanize 309 words