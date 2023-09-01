using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ArtForWelfare.Models;

namespace ArtForWelfare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AfwFundsController : ControllerBase
    {
        private readonly AfsContext _context;

        public AfwFundsController(AfsContext context)
        {
            _context = context;
        }

        // GET: api/AfwFunds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AfwFund>>> GetAfwFunds()
        {
          if (_context.AfwFunds == null)
          {
              return NotFound();
          }
            return await _context.AfwFunds.ToListAsync();
        }

        // GET: api/AfwFunds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AfwFund>> GetAfwFund(int id)
        {
          if (_context.AfwFunds == null)
          {
              return NotFound();
          }
            var afwFund = await _context.AfwFunds.FindAsync(id);

            if (afwFund == null)
            {
                return NotFound();
            }

            return afwFund;
        }

        // PUT: api/AfwFunds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAfwFund(int id, AfwFund afwFund)
        {
            if (id != afwFund.AfwfId)
            {
                return BadRequest();
            }

            _context.Entry(afwFund).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AfwFundExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AfwFunds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AfwFund>> PostAfwFund(AfwFund afwFund)
        {
          if (_context.AfwFunds == null)
          {
              return Problem("Entity set 'AfsContext.AfwFunds'  is null.");
          }
            _context.AfwFunds.Add(afwFund);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAfwFund", new { id = afwFund.AfwfId }, afwFund);
        }

        // DELETE: api/AfwFunds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAfwFund(int id)
        {
            if (_context.AfwFunds == null)
            {
                return NotFound();
            }
            var afwFund = await _context.AfwFunds.FindAsync(id);
            if (afwFund == null)
            {
                return NotFound();
            }

            _context.AfwFunds.Remove(afwFund);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AfwFundExists(int id)
        {
            return (_context.AfwFunds?.Any(e => e.AfwfId == id)).GetValueOrDefault();
        }
    }
}
