<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20210526153741.1"><vh>@settings</vh>
<v t="leo.20210526153741.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20210526153741.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20210526155936.1"><vh>About W14 task</vh>
<v t="leo.20210529151306.1"><vh>mtbrobot_w14</vh></v>
</v>
<v t="leo.20210529215420.1"><vh>force sensor</vh></v>
<v t="leo.20210529155453.1"><vh>recursive importer</vh></v>
<v t="leo.20210529155606.1"><vh>imported files</vh>
<v t="leo.20210529155606.2"><vh>@path ./</vh>
<v t="leo.20210529155606.8"><vh>@clean MTB_threadmain.lua</vh>
<v t="leo.20210529155606.9"><vh>sysCall_threadmain</vh></v>
</v>
<v t="leo.20210529155606.18"><vh>@clean suctionpad_w14.lua</vh>
<v t="leo.20210529155606.19"><vh>sysCall_init (suctionpad_w14.lua)</vh></v>
<v t="leo.20210529155606.20"><vh>sysCall_cleanup (suctionpad_w14.lua)</vh></v>
<v t="leo.20210529155606.21"><vh>sysCall_sensing (suctionpad_w14.lua)</vh></v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20210526153741.1"></t>
<t tx="leo.20210526153741.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 30px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 30px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 30px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 30px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 30px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 30px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20210526153741.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20210526155936.1">https://www.coppeliarobotics.com/helpFiles/en/robotLanguageIntegrationTutorial.htm

目前 MTB_robot 是一項四軸機械手臂, 採用特殊的指令語言令 robot 移動, 並利用 suction pad 執行 pick and place

請各組設法去除原有的特殊控制語法, 編寫一組通用的 lua 程式完成上述 MTB_robot 取放 block 的操作流程.</t>
<t tx="leo.20210529151306.1">將原先透過 plugin 特殊控制語法的場景, 改為直接以 lua 驅動 robot</t>
<t tx="leo.20210529155453.1">'''Recursively import all python files in a directory and clean the result.'''
# ctrl + b to execute

c.recursiveImport(
    dir_ = r'./',
    kind = '@clean', # The new best practice.
    safe_at_file = False,
    theTypes = ['.lua'] 
)</t>
<t tx="leo.20210529155606.1"></t>
<t tx="leo.20210529155606.18">@path ./
@others
@language lua
@tabwidth -4
</t>
<t tx="leo.20210529155606.19">function sysCall_init() 
    s=sim.getObjectHandle('suctionPadSensor')
    l=sim.getObjectHandle('suctionPadLoopClosureDummy1')
    l2=sim.getObjectHandle('suctionPadLoopClosureDummy2')
    b=sim.getObjectHandle('suctionPad')
    suctionPadLink=sim.getObjectHandle('suctionPadLink')

    infiniteStrength=sim.getScriptSimulationParameter(sim.handle_self,'infiniteStrength')
    maxPullForce=sim.getScriptSimulationParameter(sim.handle_self,'maxPullForce')
    maxShearForce=sim.getScriptSimulationParameter(sim.handle_self,'maxShearForce')
    maxPeelTorque=sim.getScriptSimulationParameter(sim.handle_self,'maxPeelTorque')

    sim.setLinkDummy(l,-1)
    sim.setObjectParent(l,b,true)
    m=sim.getObjectMatrix(l2,-1)
    sim.setObjectMatrix(l,-1,m)
end

</t>
<t tx="leo.20210529155606.2"></t>
<t tx="leo.20210529155606.20">function sysCall_cleanup() 
--[[
    sim.setLinkDummy(l,-1)
    sim.setObjectParent(l,b,true)
    m=sim.getObjectMatrix(l2,-1)
    sim.setObjectMatrix(l,-1,m)
]]--
end 

</t>
<t tx="leo.20210529155606.21">function sysCall_sensing() 
    parent=sim.getObjectParent(l)
    if (sim.getScriptSimulationParameter(sim.handle_self,'active')==false) then
        if (parent~=b) then
            sim.setLinkDummy(l,-1)
            sim.setObjectParent(l,b,true)
            m=sim.getObjectMatrix(l2,-1)
            sim.setObjectMatrix(l,-1,m)
        end
    else
        if (parent==b) then
            -- Here we want to detect a respondable shape, and then connect to it with a force sensor (via a loop closure dummy dummy link)
            -- However most respondable shapes are set to "non-detectable", so "sim.readProximitySensor" or similar will not work.
            -- But "sim.checkProximitySensor" or similar will work (they don't check the "detectable" flags), but we have to go through all shape objects!
            index=0
            while true do
                shape=sim.getObjects(index,sim.object_shape_type)
                if (shape==-1) then
                    break
                end
                if (shape~=b) and (sim.getObjectInt32Parameter(shape,sim.shapeintparam_respondable)~=0) and (sim.checkProximitySensor(s,shape)==1) then
                    -- Ok, we found a respondable shape that was detected
                    -- We connect to that shape:
                    -- Make sure the two dummies are initially coincident:
                    sim.setObjectParent(l,b,true)
                    m=sim.getObjectMatrix(l2,-1)
                    sim.setObjectMatrix(l,-1,m)
                    -- Do the connection:
                    sim.setObjectParent(l,shape,true)
                    sim.setLinkDummy(l,l2)
                    break
                end
                index=index+1
            end
        else
            -- Here we have an object attached
            if (infiniteStrength==false) then
                -- We might have to conditionally beak it apart!
                result,force,torque=sim.readForceSensor(suctionPadLink) -- Here we read the median value out of 5 values (check the force sensor prop. dialog)
                if (result&gt;0) then
                    breakIt=false
                    if (force[3]&gt;maxPullForce) then breakIt=true end
                    sf=math.sqrt(force[1]*force[1]+force[2]*force[2])
                    if (sf&gt;maxShearForce) then breakIt=true end
                    if (torque[1]&gt;maxPeelTorque) then breakIt=true end
                    if (torque[2]&gt;maxPeelTorque) then breakIt=true end
                    if (breakIt) then
                        -- We break the link:
                        sim.setLinkDummy(l,-1)
                        sim.setObjectParent(l,b,true)
                        m=sim.getObjectMatrix(l2,-1)
                        sim.setObjectMatrix(l,-1,m)
                    end
                end
            end
        end
    end
    if (sim.getSimulationState()==sim.simulation_advancing_lastbeforestop) then
        sim.setLinkDummy(l,-1)
        sim.setObjectParent(l,b,true)
        m=sim.getObjectMatrix(l2,-1)
        sim.setObjectMatrix(l,-1,m)
    end
end 
</t>
<t tx="leo.20210529155606.8">@path ./
@others
@language lua
@tabwidth -4
</t>
<t tx="leo.20210529155606.9">function sysCall_threadmain()
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
    if x &gt;= 0 then x = math.floor(x + 0.5) else x = math.ceil(x - 0.5) end
    return x / n
end
 
-- radian to degree
deg = 180/math.pi
-- link 1 length
a1 = 0.8
-- link 2 length
a2 = 0.8
-- derivated based upon https://www.youtube.com/watch?v=IKOGwoJ2HLk&amp;t=311s
function ik(x, y)
    -- (x, y) need to be located inside the circle with radius a1+a2
    if (x^2 + y^2) &lt;= (a1+ a2)^2 then
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
    
    
    
end</t>
<t tx="leo.20210529215420.1">Force sensors are initially rigid links between two shapes that are able to measure transmitted forces and torques. The rigidity of force sensors is conditional, in the sense that force sensors can be broken if a certain condition arises (e.g. if a force or torque threshold is overshot). Following figure illustrates an application using a force sensor:

A force sensor is only operational during simulation if it is dynamically enabled. It means the child of the force sensor need to be dynamically enabled.

In CoppeliaSim, only a limited number of objects will be dynamically simulated. Those are shapes, joints and force sensors, but it will depend on the scene structure and object properties, whether a given object will be dynamically simulated. </t>
</tnodes>
</leo_file>
