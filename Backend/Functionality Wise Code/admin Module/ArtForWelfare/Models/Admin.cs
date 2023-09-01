using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class Admin
{
    public int AdminId { get; set; }

    public int UserId { get; set; }

    public string Fname { get; set; } = null!;

    public string? Lname { get; set; }

    public virtual User User { get; set; } = null!;
}
