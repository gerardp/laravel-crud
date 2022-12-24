import{_ as e,c as a,o as s,a as o}from"./app.db4b9ba8.js";const m=JSON.parse('{"title":"Removing the generated CRUD files","description":"","frontmatter":{},"headers":[{"level":2,"title":"Remove files","slug":"remove-files","link":"#remove-files","children":[]},{"level":2,"title":"Backup","slug":"backup","link":"#backup","children":[]}],"relativePath":"guide/remove.md"}'),l={name:"guide/remove.md"},n=o(`<h1 id="removing-the-generated-crud-files" tabindex="-1">Removing the generated CRUD files <a class="header-anchor" href="#removing-the-generated-crud-files" aria-hidden="true">#</a></h1><h2 id="remove-files" tabindex="-1">Remove files <a class="header-anchor" href="#remove-files" aria-hidden="true">#</a></h2><p>Laravel CRUD Generator allows you to remove the generated files using the <code>artisan crud:remove</code> command.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crud:remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">customers.tickets.replies</span></span>
<span class="line"></span></code></pre></div><p>This will remove all the files generated by the <code>crud:generate</code> for this table.</p><h2 id="backup" tabindex="-1">Backup <a class="header-anchor" href="#backup" aria-hidden="true">#</a></h2><p>If you want to keep the generated files, you can use the <code>--backup</code> option to move the files into a Zip archive instead.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crud:remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">customers.tickets.replies</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--backup=backup.zip</span></span>
<span class="line"></span></code></pre></div><p>This too will remove the files from the disk but will also create a Zip archive of all the removed files too.</p>`,9),t=[n];function r(p,c,i,d,h,u){return s(),a("div",null,t)}const v=e(l,[["render",r]]);export{m as __pageData,v as default};
