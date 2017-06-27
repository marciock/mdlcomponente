class MdlInit extends HTMLElement{

  construtor(){

//  super();
    var shadow= this.attachShadow({mode: 'open'});

      var myStyle=`
        <style>
          @import url("mdl/material.min.css");
        </style>
      `;
      var myScript=`<script defer src="mdl/material.min.js"></script>`;

      shadow.innerHTML=myStyle;
      shadow.innerHTML+=myScript;


  }
}

customElements.define('mdl-init',MdlInit);
