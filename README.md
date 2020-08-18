# HZ Dev Kitchen

Welcome to a place to share code and show off some things you have created.

There are two types of posts you can make here

* A recipe
* An interactive kitchen

For recipe posts I have set up a way to render an example in as many steps as needed to explain your thought process. I am treating them as training exercises that can be be documented and help granularly explain an idea that you have been working on.

It has been arranged to build your code into steps that you can expand on from 1 - n. 

To start open a new directory in src/code. ie. src/code/new-example. step-1.tsx should be the start of your code. I have gone the route of copying and adding additional code until finished. start small at step-1.tsx and expand from there. or write the entire example and work backwards to step-1.

In parallel, in src/recipes you should create the same directory from /code. ie. src/recipes/new-example. in this directory you will be creating mdx files. index.mdx will be your intro or preface to the post and step-1.mdx - step-n.mdx will help document the code from /code. 

If you open up a recipe post in a browser you will see three tabs. Copy, Code, and Result. 
* Copy = mdx file documentation. 
* Code = a generated code snippet and diff from previous step. 
* Result = the rendered result of said code.

Lets first talk about the copy tab. 

You will be writing mdx like you normally do. There is a provided frontmatter type. 

## Frontmatter breakdown

* title: Title of recipe post
* subtitle: Subtitle of recipe post
* description: Description of recipe post
* author: Author of recipe post
* authorGithub: author's github if you want to link your github account
* written: string date written. ie. '2020-07-19'
* template: template of post. one of step-template, index-template
* hzCoreComponent: name of hz-core component used
* hzCoreLink: link to that hz-core component.
* keywords: Array of keywords for SEO.
* path: The path to your steps actual code. Used to render snippet + diff. is. use-size/step-3
* prevPath: the path to your previous step in actual code. Used to render diff. ie.  use-size/step-2
* showDiffOnLoad: boolean on whether to show diff or file view of current code snippet.
* splitView: the diff doesn't work perfectly. some times if diff snippet is not rendered side by side, the lines get screwed up so you can toggle here to render differently.

The mdx files also have some special components that are available, no need to import

`<RenderCode Code={your code to render}/>`
This is required to create the Result tab with your rendered code.

`<CodeSnippet code={stringified code snippet}>`

 This will render a nice styled code snippet. (Note: white space is rendered as well. so make sure to write multi line code strings with no tabs, unless you want them rendered.)


`<DiffSnippet 
  codeSnippet={new stringified code }
  prevCodeSnippet={old stringified code }
/>`

This will render a diff of two code snippets. Same as CodeSnippet, white space matters

`<Link to={internal url}>{children}</Link> `
A gatsby link to another url.

/src/code/use-size

and 

/src/recipes/use-size 

are probably the most basic examples on how to write these step by step. Note there is no need to write the Code in any special way. just write it, and import into recipe step post and render it in `<RenderCode Code={here}>` 