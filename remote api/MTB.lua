function sysCall_init()
    -- do some initialization here
    joint_hanld1=sim.getObjectHandle('joint1')
    joint_hanld2=sim.getObjectHandle('joint2')
    joint_hanld3=sim.getObjectHandle('joint3')
    joint_hanld4=sim.getObjectHandle('joint4')
    suctionPad=sim.getObjectHandle('suctionPad')
    angle=math.pi/180
    angle1=0
    angle2=0
    d=0
    a1=0.8
    a2=0.8
    x=0.2
    y=0.7
end

function sysCall_actuation()
    -- put your actuation code here
    message, auxiliaryData=sim.getSimulatorMessage()
        while message ~= -1 do
            key=auxiliaryData[1]
            sim.addStatusbarMessage('????? key:'..key)
            if (message==sim.message_keypress) then
                if (auxiliaryData[1]==100) then --d
                    -- if key a pressed joint1 left
                    angle1=angle1+angle
                    sim.setJointPosition(joint_hanld1,angle1)
                end -- if d
                if (auxiliaryData[1]==97) then --a 
                    -- if key d pressed joint1 right
                    angle1=angle1-angle
                    sim.setJointPosition(joint_hanld1,angle1)
                end -- if a
                if (auxiliaryData[1]==101) then --e
                    -- if key e pressed joint2 left
                    angle2=angle2+angle
                    sim.setJointPosition(joint_hanld2,angle2)
                end -- if d
                if (auxiliaryData[1]==113) then --q 
                    -- if key q pressed joint2 right
                    angle2=angle2-angle
                    sim.setJointPosition(joint_hanld2,angle2)
                end -- if a
                if (auxiliaryData[1]==56) then --8
                    -- if key 8 pressed suctionpad up and active=ture
                    d=d-0.05
                    sim.setJointPosition(joint_hanld3,d)
                    sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','ture')
                end -- if 8
                if (auxiliaryData[1]==53) then --5
                    -- if key 8 pressed suctionpad down 
                    sim.setJointPosition(joint_hanld3,0.084)
                end -- if 5
                if (auxiliaryData[1]==115) then --s
                    -- if key s pressed active=false
                    sim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),'active','false')
                end -- if 5
                message, auxiliaryData=sim.getSimulatorMessage()
            end
        end  
end
