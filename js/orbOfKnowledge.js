const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Flask', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'MongoDB',
    'OOP', 'MySQL', 'jQuery'
    ];
    var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

      var tagCloud = TagCloud('.content', myTags,{

        // radius in px
        radius: 350,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'normal',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        
        // interact with cursor move on mouse out
        keep: true
        
      });
      window.addEventListener('resize', function(event) {
        document.querySelector('.content').style.color = '#00000';
    }, true);
      