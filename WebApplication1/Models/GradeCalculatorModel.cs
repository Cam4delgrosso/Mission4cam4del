using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    //Check to make sure that the inputs are between 0 and 100
    public class GradeCalculatorModel
    {
 
        [Range(0, 100)]
        public int Assignments { get; set; }
        [Range(0, 100)]
        public int Group { get; set; }
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Range(0, 100)]
        public int Final { get; set; }
        [Range(0, 100)]
        public int INTEX { get; set; }
    }
}
