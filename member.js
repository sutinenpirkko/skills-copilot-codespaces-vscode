function skillsMember()
{
    var member = document.getElementById("member").value;
    var total = 0;
    for (var i = 0; i < member.length; i++)
    {
        total += member.charCodeAt(i);
    }
    return total;
}