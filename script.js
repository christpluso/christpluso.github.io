document.querySelectorAll('[data-ams-doc="math inline"] tex-math').forEach
  (node => node.innerHTML = `\\(${node.innerHTML}\\)`)

    document.querySelectorAll('[data-ams-doc="math block"] tex-math').forEach
  (node => node.innerHTML = `\\[${node.innerHTML}\\]`)			   
