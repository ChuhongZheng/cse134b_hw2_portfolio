# cse134b_hw2_portfolio

## Part 2 : HTML only Execution (110 pts + 10 pts Extra Credit)

**For this assignment, we \*ONLY WANT HTML\* (unless specified below - as in case of semantic CSS custom elements). The point of this assignment is not for your website to look good but for it to be structured well, have thoughtful content, and use semantic markup.**

**We STRONGLY recommend using Multiple Pages to complete this part (& showing it in the sitemap in Part 1.)**

In this section you will build out a valid semantic and structural HTML-only site in alignment with the portfolio you planned out in part 1. Valid means your pages should validate using the validator service at [https://validator.w3.org/Links to an external site.](https://validator.w3.org/) as demonstrated in discussion. More on this in **"Other grading points and details"** section.

**Your site must contain all the following tags** (**43 tags \* 2 = 86 pts**)**
**[The items with a * and *italics* have notes to read below.] 

| html      | b        |
| --------- | -------- |
| head      | i        |
| title     | strong   |
| meta      | em       |
| link      | a        |
| *script** | img      |
| *style**  | picture  |
| body      | iframe   |
| main      | *svg**   |
| h1        | ul       |
| h2        | ol       |
| h3        | li       |
| p         | form     |
| section   | label    |
| header    | fieldset |
| footer    | legend   |
| nav       | input    |
| div       | textarea |
| span      | article  |
| br        | progress |
| *button** | dialog   |
| noscript  |          |

**Additionally you must create two custom elements. Both should be named based on the guidelines below**

- 它们以ASCII 小写字母开头，确保HTML 解析器将它们视为标签而非文本。
- 它们不包含任何ASCII 大写字母，确保用户代理始终可以不区分大小写地处理HTML 元素。
- 它们包含连字符，用于命名空间并确保向前兼容性（因为未来不会向HTML、SVG 或MathML 添加带有连字符的本地名称的元素）。
- 它们始终可以使用 `createElement()` 和 `createElementNS()` 创建，这些方法有超出解析器范围的限制。

- **ONE such element is a semantic CSS custom element for any purpose you wish; the no-scripting/JS rule applies for this but CSS styling** **to establish structure is allowed and encouraged**. Any CSS within a selector specific to this element will NOT count towards the our CSS property limits. **(2 pts)**

- **the other such element is a Hello World custom element -** literally your own HTML tag that, when placed in the page, will print a simple message like ("Hello world!") **TO THE CONSOLE** (this should not modify the DOM - we will not give credit in this case). Since we haven't covered JS in detail, you are free to use generative AI to complete this part. Any JS specific to this part will NOT count towards our no-scripting/JS rules. **(2 pts)**

**Past iterations of the class had more tags but we realized not all of them will fit into your portfolio site in a reasonable way, so we have significantly shrunk the number of elements expected for part 2. Nevertheless, for full credit create page 'experiments.html' showing proper use of the elements (6 elems \* 2 pts = 12 pts total). To expedite grading and avoid delays, deploy this page in the same Netlify deployment as the section above, and use the exact name we gave.

**

| *template** |
| ----------- |
| picture     |
| audio       |
| video       |
| *canvas**   |
| source      |

 Extra Credit:

1. Use [MathMLLinks to an external site.](https://developer.mozilla.org/en-US/docs/Web/MathML) to **write the formula** for Einstein's famous formula E=mc2 **(5 pts)**
2. Despite being in the HTML specification for a long time, developers could not make use of it until quite recently. Explain why that might be the case (Hint: Check the [caniuse.comLinks to an external site.](https://caniuse.com/) page for MathML!) **(5 pts)**

### Other grading points and details

- Validation (8 pts). 

  There are two ways to get the full credit:

  - The page validates (we will be checking your netlify site with [https://validator.w3.org/Links to an external site.](https://validator.w3.org/) OR
  - If it does not, explain in detail 1) what you have attempted to achieve validation and 2) your theories on why it may not be validating. Be detailed in your thoughts to receive the full credit

- Pages must **not suffer form "div-itis"** and exhibit reasonably semantic HTML

- You must use all the tags on the table above. Each tag used is worth two points (1pt for presence and 1pt for appropriate contextual use or demo)

- Misuse of CSS or Script attempting to build the site early will result in a loss of 25% of your overall points.

- **Recycling the HW1 repo ([https://github.com/ProfPowell/cse134-hw1/Links to an external site.](https://github.com/ProfPowell/cse134-hw1/)) as your portfolio page will result in a loss of 25% of your overall points**

Make sure to host your site on Netlify hosting and provide a link to it in the Part 1 pdf submission.

 

```
<style> 
```

**Note:** You may NOT style your pages beyond using a border to provide a base page structure. If you have more than 3 CSS properties (total, not unique) in your file, points can be deducted. *border* or *border-width* will not count towards this limit.

```
<script> 
```

**Note:** You may add script as a placeholder to show the use of a third-party script for analytics or for use with a tag that we have permitted the use of JS for (e.g. the **canvas** tag). No interactions are allowed at this stage. Otherwise, you will be deducted points. 

```
<button> 
```

**Because of our "no scripting" rule for HW2, your button do NOT need to work for now.** Do take care that your markup is valid and well done for these but they do not need to actually do anything yet.

```
<canvas> 
```

**Note:** To demonstrate the use of a <canvas> tag, you may include some MINOR AMOUNT of JavaScript. You are simply exploring the idea of the tag. If you have more than 15 lines of script to do something, assume you did too much.

```
<template> 
```

**This element is also subject to our no-JS rule. We ask that you do not write the Javascript that clones the template and adds it into the webpage (for now).** You can simply have the contents of the template somewhere in your HTML code it doesn't have to show.