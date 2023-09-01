using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class Artist
{
    public int ArtistId { get; set; }

    public int UserId { get; set; }

    public string Fname { get; set; } = null!;

    public string? Lname { get; set; }

    public int AreaId { get; set; }

    public string? Address { get; set; }

    public string Contact { get; set; } = null!;

    public string? Speciality { get; set; }

    public virtual Area Area { get; set; } = null!;

    public virtual ICollection<Art> Arts { get; set; } = new List<Art>();

    public virtual User User { get; set; } = null!;
}
