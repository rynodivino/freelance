
/**
Vector

2d = (x,y)
3d = (x,y,z)

2 = squared, not multiplied by 2

length/magnitude = sqrt(x2 + y2) or sqrt(x2 + y2 + z2);

Before continue.  Re-evaluate functions.  Should it be on a Vector class, or a VectorUtil class.
Do I want a number back, points, or a Vector object?

This methods should accept points arrays, not vector objects.  too difficult to manage this way
*/

function Vector (points) {
    var self = this;
    self.points = points || [0,0];
};



Vector.prototype = {

    getPoints : function() {
        var self = this;
        return self.points;
    },

    // This is bad.  Right now it does adding 2 args, or adding self.points and passed in arg.  
    // Should be 2 seperate classes.  Vector and (Vectors or VectorUtil)
    add : function(a,b) {
        var self = this,
            b = b || self,
            depth = (a && a.points && b && b.points) ? Math.max(a.points.length,b.points.length) : 0,
            points = [],
            aPoint,
            bPoint,
            i;
            
        if(depth > 1) {
            
            for (i=0; i< depth; i++) {
                aPoint = a.points[i] || 0;
                bPoint = b.points[i] || 0;
                points.push(aPoint+bPoint);
            }
        } else {
            throw Error('Invalid Vector inputs, can not add values: vector.js:add');
        }

        return points;
    },
    
    subtract : function(a,b) {
        var self = this,
            b = b || self,
            depth = (a && a.points && b && b.points) ? Math.max(a.points.length,b.points.length) : 0,
            points = [],
            aPoint,
            bPoint,
            i;
            
        if(depth > 1) {
            
            for (i=0; i< depth; i++) {
                aPoint = a.points[i] || 0;
                bPoint = b.points[i] || 0;
                points.push(aPoint-bPoint);
            }
        } else {
            throw Error('Invalid Vector inputs, can not subtract values: vector.js:subtract');
        }

        return points;
            
    },
    
    multiply : function(a,b) {
        var self = this,
            b = b || self,
            depth = (a && a.points && b && b.points) ? Math.max(a.points.length,b.points.length) : 0,
            points = [],
            aPoint,
            bPoint,
            i;
            
        if(depth > 1) {
            
            for (i=0; i< depth; i++) {
                aPoint = a.points[i] || 0;
                bPoint = b.points[i] || 0;
                points.push(aPoint*bPoint);
            }
        }

        return points;
    },
    
    // Multiply a vector by a regular number
    multiplyScalar : function (a,b) {
        var self = this,
            b = b || 0,
            depth = a && a.points ? a.points.length : 0,
            points = [],
            i;
            
        if(depth > 1) {
            
            for (i=0; i< depth; i++) {
                points.push(b);
            }

            return self.multiply(a,new Vector(points));
        }

        return null;
    },
    
    divide : function(a,b) {
        var self = this,
            b = b || self,
            depth = (a && a.points && b && b.points) ? Math.max(a.points.length,b.points.length) : 0,
            points = [],
            aPoint,
            bPoint,
            i;
            
        if(depth > 1) {
            
            for (i=0; i< depth; i++) {
                aPoint = a.points[i] || 0;
                bPoint = b.points[i] || 0;
                if (bPoint !== 0) {
                    points.push(aPoint/bPoint);
                } else {
                    points.push(0);
                }
            }
        }

        return points;
    },
    
    // Divide a vector by a regular number
    divideScalar : function (a,b) {
        var self = this,
            b = b || 0,
            depth = a && a.points ? a.points.length : 0,
            points = [],
            i;
            
        if(depth > 1) {
            
            for (i=0; i< depth; i++) {
                points.push(b);
            }

            return self.divide(a,new Vector(points));
        }

        return null;
    },
    
    // Pythagorean Theorem 
    magnitude : function(v) { 
        var self = this,
            v = v || self,
            l = v.points ? v.points.length : 0,
            sum = 0;
        
        for (var i = 0; i < l; i++) {
            //v.points[i] Squared
            sum += v.points[i]*v.points[i];
        }

        return Math.sqrt(sum);        
    },
    
    // Useful if comparing 2 vectors just to see who's length is greater, and you don't need magnitude
    squareLen : function(v) {
        var self = this,
            v = v || self,
            d = v.points ? v.points.length : 0,
            i,
            sum = 0;
            
        for (i = 0;i < d; i++ ) {
            sum += v.points[i]*v.points[i];
        }
        
        return sum;
    },
    
    // Find the distance of the two vectors (new vector), and calculate it's magnitude/length
    distance : function (a,b) {
        var self = this,
            diff = new Vector(self.subtract(a,b));
        return self.magnitude(diff);
    },
    
    dot : function (v) {
        var self = this,
        depth = v && v.points ? Math.max(v.points.length,self.points.length) : 0,
        aPoint,
        bPoint,
        i,
        sum = 0;
        
        for(i = 0; i<depth;i++) {
            aPoint = self.points[i] || 0;
            bPoint = v.points[i] || 0;
            sum += self.points[i]*v.points[i];
        }
        return sum;
    },
    
    // (2D case) Returns the z component of the cross product of the two vectors augmented to 3D.
    // formula/usage: a.cross(b) = a.x * b.y – a.y * b.x;
    cross2D : function(v) {
        var self = this;
        
        return (self.points[0] * v.points[1]) - (self.points[1]*v.points[0]);
            
    },

    // (3D case) Returns the cross product of the two vectors.
    cross3D : function(v) {
        var self = this;
        return [
            ((self.points[1] * v.points[2]) - (self.points[2] * v.points[1])),
            ((self.points[2] * v.points[0]) - (self.points[0] * v.points[2])),
            ((self.points[0] * v.points[1]) - (self.points[2] * v.points[0]))
        ];
    },    
    
    // Returns a vector pointing on the same direction, but with a length of 1.
    unit : function() {
        var self = this,
            len = self.magnitude();

        // a/a.magnitude()  should return a vector
        return new Vector(self.divideScalar(self,len));
    }
    /**,
    still working these out
    direction : function(a,b) {
        var self = this,
            b = b || 0,
            depth = a && a.points ? a.points.length : 0,
            direction;

        dir = new Vector(self.subract(b,a));
        //now basically call unit on dir
        return dir.unit();
    },
    
    // Line x units in specified direction
    parmetricLine : function(point,units,dir) {
        var self = this,
            point = point || self.points[0],
            dir = dir || 
        return point + dir * units;
    }
    */

};



