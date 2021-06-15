function sysCall_threadmain()
    -- do some initialization here
    joint_hanld1=sim.getObjectHandle('joint1')
    joint_hanld2=sim.getObjectHandle('joint2')
    joint_hanld3=sim.getObjectHandle('joint3')
    suctionPad=sim.getObjectHandle('suctionPad')
    angle=180/math.pi
    angle1=math.pi/180
    d=0
    a1=0.8
    a2=0.8
    x=0.7
    y=0.2
    print(a)
    function round(x, n)
    n = math.pow(10, n or 0)
    x = x * n
    if x >= 0 then x = math.floor(x + 0.5) else x = math.ceil(x - 0.5) end
    return x / n
end
 
-- radian to degree
deg = 180/math.pi
-- link 1 length
a1 = 0.8
-- link 2 length
a2 = 0.8
-- derivated based upon https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s
function ik(x, y)
    -- (x, y) need to be located inside the circle with radius a1+a2
    if (x^2 + y^2) <= (a1+ a2)^2 then
        q2 = -math.acos((x^2+y^2-a1^2-a2^2)/(2*a1*a2))
        q1 = math.atan2(y, x) + math.atan2((a2*math.sin(q2)), (a1+a2*math.cos(q2)))
        return {round(q1*deg, 4), round(q2*deg, 4)}
    else
        print("Over range!")
    end
end
 
theta = ik(0.7, 0.2)
 
print(theta[1], theta[2])
            sim.setJointTargetPosition(joint_hanld1,-theta[1]*angle1)
            sim.setJointTargetPosition(joint_hanld2,theta[2]*angle1)
            sim.wait(3)
    while(true)
        do  
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld3,0.06)
            sim.wait(3)
            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','ture')
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld3,-0.06)
            sim.wait(3)
            theta = ik(-0.55, -0.3)
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld1,-theta[1]*angle1)
            sim.setJointTargetPosition(joint_hanld2,theta[2]*angle1)
            sim.wait(10)
            sim.setJointTargetPosition(joint_hanld3,0.06)
            sim.wait(3)
            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','false')
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld3,-0.06)
            sim.wait(3)
            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','ture')
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld3,0.06)
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld3,-0.06)
            sim.wait(3)
            theta = ik(0.7, 0.2)
            sim.setJointTargetPosition(joint_hanld1,-theta[1]*angle1)
            sim.setJointTargetPosition(joint_hanld2,theta[2]*angle1)
            sim.wait(10)
            sim.setJointTargetPosition(joint_hanld3,0.06)
            sim.wait(3)
            sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','false')
            sim.wait(3)
            sim.setJointTargetPosition(joint_hanld3,-0.06)
    end   
    
    
    
end
