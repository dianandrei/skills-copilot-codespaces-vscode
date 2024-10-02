function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        // Method to display skills
        displaySkills: function() {
            this.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };
    return member;
}