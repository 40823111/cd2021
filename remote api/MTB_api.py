# File created by Thibaut Royer, Epitech school
# thibaut1.royer@epitech.eu
# It intends to be an example program for the "Two wheels, one arm" educative project.
import sim as vrep
import math
import random
import time
import keyboard


print ('Start')

# Close eventual old connections
vrep.simxFinish(-1)
# Connect to V-REP remote server
clientID = vrep.simxStart('192.168.1.116', 19997, True, True, 5000, 5)

if clientID != -1:
    print ('Connected to remote API server')
    
    res = vrep.simxAddStatusbarMessage(
        clientID, "40823246",
        vrep.simx_opmode_oneshot)
    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):
        print("Could not add a message to the status bar.")

    
    opmode = vrep.simx_opmode_oneshot_wait
    angle1=math.pi/180
    
    # radian to degree
    deg = 180/math.pi
    # link 1 length
    a1 = 0.8
    # link 2 length
    a2 = 0.8
    # derivated based up https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s
     
    def ik(x, y):
        # (x, y)  need to be located inside the circle with radius a1+a2
        if (x**2 + y**2) <= (a1+ a2)**2:
            q2 = -math.acos((x**2+y**2-a1**2-a2**2)/(2*a1*a2))
            q1 = math.atan2(y, x) + math.atan2((a2*math.sin(q2)), (a1+a2*math.cos(q2)))
            # The decimal point of number is rounded to the 4th place
            return [round(q1*deg, 4), round(q2*deg, 4)]
        else:
            print("Over range!")
            # end the script execution
 
    theta = ik(0.7, 0.2)
 
    print(theta[0], theta[1])
    
    vrep.simxStartSimulation(clientID, opmode)
    ret,joint_hanld1=vrep.simxGetObjectHandle(clientID,"joint1",opmode)
    ret,joint_hanld2=vrep.simxGetObjectHandle(clientID,"joint2",opmode)
    ret,joint_hanld3=vrep.simxGetObjectHandle(clientID,"joint3",opmode)
    ret,suctionPad=vrep.simxGetObjectHandle(clientID,"suctionPad",opmode)
    vrep.simxSetJointTargetPosition(clientID,joint_hanld1,-theta[0]*angle1,opmode)
    vrep.simxSetJointTargetPosition(clientID,joint_hanld2,theta[1]*angle1,opmode)
    time.sleep(0.5)
    while True:
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)
            time.sleep(0.5)
            vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)
            time.sleep(0.5)
            theta = ik(-0.55, -0.3)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld1,-theta[0]*angle1,opmode)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld2,theta[1]*angle1,opmode)
            time.sleep(2)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)
            time.sleep(0.5)
            vrep.simxSetIntegerSignal(clientID,"pad_switch",0,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)
            time.sleep(0.5)
            vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)
            time.sleep(0.5)
            theta = ik(0.7, 0.2)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld1,-theta[0]*angle1,opmode)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld2,theta[1]*angle1,opmode)
            time.sleep(2)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,0.06,opmode)
            time.sleep(0.5)
            vrep.simxSetIntegerSignal(clientID,"pad_switch",0,opmode)
            time.sleep(0.5)
            vrep.simxSetJointTargetPosition(clientID,joint_hanld3,-0.06,opmode)
    end
        
else:
    print ('Failed connecting to remote API server')
    print ('End')