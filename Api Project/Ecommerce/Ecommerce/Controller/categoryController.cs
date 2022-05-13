using Ecommerce.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ecommerce.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class categoryController : ControllerBase
    {
        private readonly EcommerceEntity context;
        public categoryController(EcommerceEntity context)
        {
            this.context = context;

        }
        [HttpGet]
        public IActionResult getAll()
        {
            List<category> categories = context.categories.ToList();
            if (categories == null)
                return BadRequest("There is non categories");
            return Ok(categories);
        }
        [HttpGet("{id:int}", Name = "getCategoryById")]
        public IActionResult getById(int id)
        {
            category category = context.categories.FirstOrDefault(c => c.id == id);
            if (category == null)
                return BadRequest("category is not found");
            return Ok(category);

        }
        [HttpPost]
        public IActionResult New(category category)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    context.categories.Add(category);
                    context.SaveChanges();
                    string url = Url.Link("getCategoryById", new { id = category.id });
                    return Created(url, category);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }

            }
            return BadRequest(ModelState);
        }
        [HttpPut("{id:int}")]
        public IActionResult Edit(int id,category category)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    category oldCategory = 
                        context.categories.FirstOrDefault(c => c.id == id); 
                    oldCategory.name = category.name; 
                    oldCategory.products = category.products;
                    context.SaveChanges();

                    return StatusCode(204, "Data Saved");
                }
                catch(Exception ex) 
                {
                    return BadRequest(ex.Message);

                }

            }
            return BadRequest(ModelState);
        }
        

    }
}
