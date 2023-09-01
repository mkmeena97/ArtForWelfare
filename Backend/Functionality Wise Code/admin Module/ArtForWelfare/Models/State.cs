using System;
using System.Collections.Generic;

namespace ArtForWelfare.Models;

public partial class State
{
    public int StateId { get; set; }

    public string StateName { get; set; } = null!;

    public virtual ICollection<City> Cities { get; set; } = new List<City>();
}
