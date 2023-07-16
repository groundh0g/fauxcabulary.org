---
navbar:
  fixed: true # fixed to top of page?
  # fill:  true # header background fills page width, ignoring content width settings that follow
  width: container # one of: container | default | fluid
  logo: /assets/images/logo-1024x1024.png
  underlineActive: true # underline active link?
  search: false # include search in navbar? (right-aligned)
  color:
    back: primary # one of: dark | light | primary | secondary | success | info | warning | danger | link
    tint: dark    # one of: dark | light ... shade of background, dark for light text, light for dark text
  menu:
    homepage: # comment out this block to hide title in menu
      text: Fauxcabulary # <span class="tiny">.org</span> # default is {metadata.title}
      icon: /assets/images/logo-1024x1024.png # optional
      underlineActive: false # underline link when on homepage?
      search: true # true
    pullRight: true
    items:
      - item: Terms
        link: /terms/
      - item: Gallery
        link: /gallery/
      - item: Shop
        link: /shop/
      - item: Blog
        link: /blog/
        activeWhenContains: /blog/ # highlight as active when the url includes the given text
        items:
          - item: Latest Posts
            link: /blog/latest/
          - item: Post Archive
            link: /blog/archive/
      - item: Help
        activeWhenContains: /help/ # highlight as active when the url includes the given text
        items:
          - item: About the Site
            link: /help/about/site/
          - item: About Joe
            link: /help/about/joe/
          - item: Contact Us
            link: /help/contact-us/

customize:
  theme:      darkly  # one of: cerulean | cosmo | cyborg | darkly | default | flatly | journal | litera | lumen | lux | materia | minty | morph | pulse | sandstone | simplex | sketchy | slate | solar | spacelab | superhero | united | vapor | yeti | zephyr
  http404:    sticky  # one of: badge | default | dog | droids | glass | link | milk | monster | potty | shrug | sticky | tweet | zork
  width:      padded  # one of: default | padded | full
  background: dark    # one of: dark | light | none
  css: [ "main.css", "tiles.css" ] # array of stylesheets to load after other styles
  #js:  [ "main.js"  ] # array of javascripts to load after other scripts

  homepage: custom    # one of: books | contributors | custom | docs | landing | legal | soon | webapps

widgets:
  hr:
    size:    2       # one of: 1 | 2 | 3 | 4 | 5
    color:   primary # one of: light | dark | primary | secondary | success | info | warning | danger
    opacity: 75      # one of: 0 | 25 | 50 | 75 | 100

build:
  use_cdn:      true # use CDN for 3rd-party scripts and styles?
  search:       true # create search index?

  #books:        true # process book content?
  #docs:         true # process documentation content?
  #landing:      true # process landing page content?
  #soon:         true # process coming soon content?
  #webapps:      true # process webapps content? (the overviews, not the webapp(s) itself)
  #legal:        true # process legal content?
  #contributors: true # process contributors content?

#navbar:
#  fixed:         true # sticky navbar?
#  container:     true # is nav same width as content?
#  search:        true # include search in navbar? (right-aligned)

  ###search:       true # include search box in navbar (rightmost element)
  #books:        true # include link to books overview? {build.books} when blank
  #docs:         true # include link to docs overview? {build.docs} when blank
  #webapps:      true # include link to webapps overview? {build.webapps} when blank
  #legal:        true # include link to legal content overview? {build.legal} when blank
  #contributors: true # include link to contributors page? {build.contributors} when blank
  #pages:        true # include all other page content?

search:
  content:      full # one of: false | full | excerpt
  ignore:       [ ".css", ".js", ".json", ".xml", "/404.html", "/custom.html", "/status.html" ]
  groups:       [ "/content/contributors/", "/content/legal/" ]
  strip_chars:  "|'.,:;!?├─└…()[]#-/“”{}’"
  strip_quote:  true
  titles:       true # search titles from pages and posts?
  tags:         true # search post tags?
  pages:        true # search all page content?
  posts:        true # search all post content?

  #books:        true # search all book content? {build.books} when blank
  #docs:         true # search all docs content? {build.docs} when blank
  #landing:      true # search landing page content? {build.landing} when blank
  #soon:         true # search coming soon page content? {build.soon} when blank
  #webapps:      true # search webapps overview content? {build.webapps} when blank
  #legal:        true # search legal content? {build.legal} when blank
  #contributors: true # search contributors page? {build.contributors} when blank

fonticons:
  fontawesome: cdn # one of: false | local | cdn
  foundation:  false # one of: false | local | cdn
  glyphicons:  false # one of: false | local
  icomoon:     false # one of: false | local | cdn
  ionicons:    false # one of: false | local | cdn
  material:    false # one of: false | local | cdn
  octicons:    false # one of: false | local | cdn

analytics:
  provider: false # one of: false | google | matomo | getclicky | mixpanel | gauges 
  siteid: G-0000000000
  baseurl: # only used by matomo; ex: mysite.com/piwik

comments:
  provider: false # one of: false | facebook | disqus | intensedebate | duoshuo
  siteid: 0000000000000000

# --- JekyllFaces Metadata ---

metadata:
  title: Fauxcabulary<small><small>.org</small></small>
  tagline: Fake definitions. Real funny.
  description: >- # Description for the site ...
    Fauxcabulary.org is a place to store my terrible puns. You're Welcome.
  legal: # used for privacy policy, terms of use, etc ...
    company: Joseph B. Hall  # {metadata.title} when blank
    website: http://joehall.net/  # http://{metadata.title}.com when blank
    jurisdiction: Georgia # e.g. Georgia, "United States" when blank
  trademark: # "Fauxcabulary, its content, and its logo are copyright by Joseph B. Hall."
  copyright: "All content &copy; 2010-CURRENT_YEAR by [Joseph B. Hall](https://joehall.net/)."
  lang: en

  github:    https://github.com/groundh0g/fauxcabulary.org
  website:   http://fauxcabulary.org/
  components:
    version:
      build-tools: 
        jekyllfaces:
          name:    Jekyll Faces
          promote: Non-plugin extensions for Jekyll to go beyond blogging, compatible with GitHub Pages.
          version: 0.1.0
          website: http://jekyllfaces.com/
          srcrepo: https://github.com/groundh0g/jekyllfaces
          include: # not applicable
          cdninfo: # not applicable 
        jekyll:
          name:    Jekyll
          promote: Transform your plain text into static websites and blogs.
          version: 3.9.3
          website: https://jekyllrb.com/
          srccode: https://github.com/groundh0g/jekyllfaces
          include: # not applicable
          cdninfo: # not applicable 
        github-pages: 
          name:    GitHub Pages Ruby Gem
          promote: Tools to bootstrap dependencies for Jekyll on GitHub Pages, locally.
          version: 228
          website: https://pages.github.com/
          srccode: https://github.com/github/pages-gem
          include: # not applicable
          cdninfo: # not applicable 
      frameworks: 
        bootstrap:
          name:    Bootstrap
          promote: Powerful, extensible, and feature-packed frontend toolkit.
          version: 5.2.3
          website: https://getbootstrap.com/
          srccode: https://github.com/twbs
          include: false # one of: false | local | cdn
          cdninfo: 
        bootswatch:
          name:    Bootswatch
          promote: Free themes for Bootstrap.
          version: 5.2.3
          website: https://bootswatch.com/
          srccode: https://github.com/thomaspark/bootswatch
          include: false # one of: false | local | cdn
          cdninfo: 
      fonts:
        google:
          name:    Google Fonts
          promote: A massive collection of free fronts from Google.
          version: 1.0.0
          website: https://fonts.google.com/
          srccode: https://github.com/google/fonts
          include: false # one of: false | local | cdn
          cdninfo: 
            url: "https://fonts.googleapis.com/css2?display=swap&%IMPORTS%"
            # TODO: implement like this ...
            # ex: https://fonts.googleapis.com/css?display=swap&foo=bar&family=Luckiest+Guy|Gochi+Hand
            # or: https://fonts.googleapis.com/css2?display=swap&foo=bar&family=Luckiest+Guy&family=Gochi+Hand
          imports: # a list of font names to import, also applicable at the page/post level
            - Luckiest Guy
            - Gochi Hand
      icons:
        fontawesome:
          name:    Font Awesome (Free)
          promote: The world's most popular icon set and toolkit.
          version: 6.4.0
          website: https://fontawesome.com/icons
          srccode: https://github.com/FortAwesome/Font-Awesome
          include: false # one of: false | local | cdn
          cdninfo: 
            url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        foundation:
          name:    Foundation Icons Fonts
          promote: Icons in any size, color, style via CSS.
          version: 3.0.0
          website: https://zurb.com/playground/foundation-icon-fonts-3
          srccode: https://github.com/zurb/foundation-icons
          include: false # one of: false | local | cdn
          cdninfo:
            url: "https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.min.css"
            integrity: "sha512-kDmbIQZ10fxeKP5NSt3+tz77HO42IJiS+YPIirOIKTdokl4LtuXYo3NNvq9mTAF+rzdV1plp0sm9E6nvtVpnFQ=="
        icomoon:
          name:    IcoMoon (Free)
          promote: Font icons via CSS, and an app to make them.
          version: 1.0.0
          website: https://icomoon.io/
          srccode: https://github.com/Keyamoon/IcoMoon-Free
          include: false # one of: false | local | cdn
          cdninfo: 
            url: "https://cdn.jsdelivr.net/npm/icomoon@1.0.0/style.min.css"
            integrity: 
        ionicons:
          name:    Ionicons
          promote: Open source icons. Lovingly hand-crafted.
          version: 7.1.0
          website: https://ionic.io/ionicons
          srccode: https://github.com/ionic-team/ionicons
          include: false # one of: false | local | cdn
          cdninfo: 
            url: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.1.0/esm/ionicons.min.js"
            integrity: "sha512-2ySmquu6HK3CAvwLllh0R8K8buFPMZsUwWLZIlB7WW8c8ilUtoNyhsmEsQn2U0IV1USr2Oc/9DJzlr4cxAbuxA=="
        material:
          name:    Material Symbols
          promote: Font icons from Google's Material 3, an open-source design system.
          version: 4.0.0
          website: https://fonts.google.com/icons
          srccode: https://github.com/google/material-design-icons
          include: false # one of: false | local | cdn
          cdninfo: 
            url: "https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/4.0.0/iconfont/material-icons.min.css"
            integrity: 
        octicons:
          name:    Octicons
          promote: A set of SVG icons built by GitHub for GitHub.
          version: 8.5.0
          website: https://octicons.github.com/
          srccode: https://github.com/primer/octicons
          include: false # one of: false | local | cdn
          cdninfo:
            url: "https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/build.css"
            integrity: "sha512-oXqkIy/+iqrHrpoTwFkSLZJpNwoYn9e77QtCNzBi+Jb6uJgTtcdHVy0C+nEpeUfC3fxSbydPxLG+ndikNVvrdQ=="
---
# Config File

This markdown should never be displayed. This text is to satisfy the linters.