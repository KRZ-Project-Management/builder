let getpagetitle=$(document).attr('title'),dataimg=$('.image-cover').first().attr('style'),datadesc=$('meta[name="description"]').attr('content'),dataimgpubh=$('meta[name="msapplication-TileImage"]').attr('content'),datepubh=$('#writtenbyauthor').attr('data-date'),datemod=$('#rewrittenbyauthor').attr('data-date'), jsonldScript = document.createElement('script'); jsonldScript.setAttribute('type', 'application/ld+json'); jsonldScript.textContent = '{"@context":"https://schema.org/","@type":"Article","mainEntityOfPage":{"@type":"WebPage","@id":"'+updateParam(document.location.href,'m','')+'"},"headline":"'+getpagetitle+'","description":"'+datadesc+'","image":{"@type":"ImageObject","url":"'+dataimg.replace('background-image: url(','').replace(');','')+'"},"author":{"@type":"Person","url": "https://kharispati.blogspot.com","name":"KharisPati"},"publisher":{"@type":"Organization","name":"KharisPati","logo": {"@type":"ImageObject","url":"'+dataimgpubh+'"}},"datePublished":"'+datepubh+'", "dateModified":"'+datemod+'"}'; document.head.appendChild(jsonldScript); $('meta[property="og:image"]').attr('content',dataimg.replace('background-image: url(','').replace(');','')); $('meta[name="twitter:image:src"]').attr('content',dataimg.replace('background-image: url(','').replace(');',''));