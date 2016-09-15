(function() {
  window.addEventListener("load", init)

  var firstParts = [
    "Data",
    "Big data-",
    "Node-",
    "Scala-",
    "Java-",
    "iOS-",
    "IoT-",
    "Devops-",
    "Android-",
    "J2EE-",
    "COBOL-",
    "Pilvi",
    "AWS-",
    "Clojure-",
    "Data science -",
    "Ohjelmisto",
    "Digi\xADmarkkinointi",
    "B2B-",
    "Markkinointi\xADautomaatio",
    "Digi",
    "Softa",
    "IT-",
    "Frontti",
    "B\xE4kk\xE4ri",
    "Integraatio"
  ]

  var midParts = [
    "puuman",
    "sauruksen",
    "sonnin",
    "tikkarin",
    "kaivoksen",
    "louhoksen",
    "uima-altaan",
    "tiikerin",
    "kikkareen",
    "baarin",
    "putkiston",
    "hautaus\xADmaan",
    "putkan",
    "tiimin"
  ]

  var thirdParts = [
    "kokki",
    "agrologi",
    "amanuenssi",
    "kalastaja",
    "hoitaja",
    "sepp\xE4",
    "kengitt\xE4j\xE4",
    "mestari",
    "diakoni",
    "haudan\xADkaivaja",
    "gynekologi",
    "kankuri",
    "kondukt\xF6\xF6ri",
    "hieroja",
    "luotsi",
    "l\xE4\xE4nin\xADrovasti",
    "lomittaja",
    "nahkuri",
    "py\xF6veli",
    "puutarhuri",
    "runoilija",
    "shamaani",
    "sorvari",
    "hygienisti",
    "kahlaaja",
    "kriitikko",
    "terapeutti",
    "teurastaja",
    "kesytt\xE4j\xE4",
    "uima\xADopettaja",
    "meedio",
    "mafioso",
    "gigolo",
    "putkimies",
    "stuertti",
    "s\xE4velt\xE4j\xE4",
    "roskakuski",
    "er\xE4opas",
    "haltia",
    "vuorenpeikko",
    "kyborgi"
  ]

  function init() {
    button().addEventListener("click", newJobTitle)
    button().addEventListener("click", removeIntro)
  }

  function removeIntro() {
    firstElementByClass("intro-text").style.opacity = 0.0
    firstElementByClass("intro-after").style.opacity = 1.0
  }

  function newJobTitle() {
    var title = randomTitle()
    jobTitleArea().textContent = title
    twitterButton().setAttribute("data-text", "Uusi ammattini on: " + title)
  }

  function randomTitle() {
    return random(firstParts) +
           (randInt(3) == 0 ? "\xAD" + random(midParts) + " " : "\xAD") +
           random(thirdParts)
  }

  function button() {
    return firstElementByClass("js-button")
  }

  function jobTitleArea() {
    return firstElementByClass("js-jobtitle")
  }

  function twitterButton() {
    return firstElementByClass("twitter-share-button")
  }


  function firstElementByClass(name) {
    return document.getElementsByClassName(name)[0]
  }

  function random(list) {
    return list[randInt(list.length)]
  }

  function randInt(max) {
    return Math.floor(Math.random() * max)
  }
})()
