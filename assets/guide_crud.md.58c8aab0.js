import{_ as e,c as t,o as a,a as o}from"./app.4e4b11a5.js";const p=JSON.parse('{"title":"Create and Edit records","description":"","frontmatter":{},"headers":[{"level":2,"title":"Form fields","slug":"form-fields","link":"#form-fields","children":[]},{"level":2,"title":"Validation rules","slug":"validation-rules","link":"#validation-rules","children":[]},{"level":2,"title":"Relation fields","slug":"relation-fields","link":"#relation-fields","children":[]},{"level":2,"title":"Quick note about relation fields","slug":"quick-note-about-relation-fields","link":"#quick-note-about-relation-fields","children":[]}],"relativePath":"guide/crud.md"}'),i={name:"guide/crud.md"},l=o('<h1 id="create-and-edit-records" tabindex="-1">Create and Edit records <a class="header-anchor" href="#create-and-edit-records" aria-hidden="true">#</a></h1><p>Laravel CRUD generator can automatically generate the FORM for creating and editing records. It can also generate the validation rules for the form.</p><h2 id="form-fields" tabindex="-1">Form fields <a class="header-anchor" href="#form-fields" aria-hidden="true">#</a></h2><p>The form fields are generated based on the database table columns. The following column types are supported:</p><blockquote><p><img src="https://cdn.articlevideorobot.com/hosted/22-12-2022/selection-307-f402.webp" alt="Example of generated fields"><br> (Example of generated fields)</p></blockquote><ul><li><code>string</code> (input type text)</li><li><code>text</code> (textarea)</li><li><code>integer</code> (input type number)</li><li><code>enum</code> (select)</li><li><code>boolean</code> (radio buttons)</li><li><code>relation</code> (select with hydrated options)</li><li>and so on...</li></ul><p>It can also infer the field type from the column names. For example, if the column name is <code>email</code>, the field type will be <code>email</code>.</p><h2 id="validation-rules" tabindex="-1">Validation rules <a class="header-anchor" href="#validation-rules" aria-hidden="true">#</a></h2><p>By default, all non-nullable fields are required. Columns with a <code>unique</code> index are also validated to be unique in the table.</p><p>Some additional validation rules are also added based on the column name. For example, if the column name is <code>email</code>, the validation rule will be <code>email</code>.</p><h2 id="relation-fields" tabindex="-1">Relation fields <a class="header-anchor" href="#relation-fields" aria-hidden="true">#</a></h2><p>If the table has any foreign key columns, the generator will automatically add a select field for that column. The options for the select field will be hydrated from the related table.</p><p>For example, if your table has a <code>country_id</code> column and if the <code>country</code> table exists: the generator will add a select field for country (as shown in the image above) and the options for that select field will be hydrated from the <code>countries</code> table (if the country table has a <code>user_id</code> column, the options will be filtered by the current user).</p><h2 id="quick-note-about-relation-fields" tabindex="-1">Quick note about relation fields <a class="header-anchor" href="#quick-note-about-relation-fields" aria-hidden="true">#</a></h2><p>You do need to add relation fields manually or create any foreign key columns in the database. The relation is inferred from the column name only. Any column name that matches the pattern <code>*_id</code> are considered relation.</p><p>For example, if the column name is <code>country_id</code>, the generator will look for a <code>countries</code> table and add if that exists (and if the current user has permission to access that table) it will add a select field for that column and hydrate the options from the <code>countries</code> table.</p>',16),d=[l];function r(n,c,s,h,u,f){return a(),t("div",null,d)}const b=e(i,[["render",r]]);export{p as __pageData,b as default};
