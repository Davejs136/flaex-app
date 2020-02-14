const query = `  
{
  profiles {
    name
    city
    content_en {
      headline
      summary
      story
      seo_description
      seo_img_title
      seo_img_alt    
    }
    content_es {
      headline
      summary
      story
      seo_description
      seo_img_title
      seo_img_alt    
    }
  }
  locations {
    city
    content_en {
      description
    }
    content_es {
      description
    }
  }
  skills {
    id
    prefix
    icon
    content_en {
      title
    }
    content_es {
      title
    }
  }
  links {
    id
    title
    prefix
    icon
    url
  }
  works {
    id
    title
    year
    city
    category 
    subcategory   
    slug
    tag
    content_en {
      title
      description
      seo_image_title
      seo_image_alt
      seo_description
      
    }
    content_es {
      title
      description
      seo_image_title
      seo_image_alt
      seo_description
      
    }
    
  } 
}
`
module.exports = query
